const API_BASE_URL = 'https://api.raisely.com/v3';

const getApiKey = () => {
  const key = process.env.NEXT_PUBLIC_API_KEY;
  
  if (!key) {
    console.error('API Key is missing! Check your .env.local file');
    console.error('Make sure the variable starts with NEXT_PUBLIC_');
  }
  
  return key;
};

export const donationService = {
  async getAllDonations(params = {}) {
    try {
      const apiKey = getApiKey();
      
      if (!apiKey) {
        throw new Error('API key not configured');
      }

      const queryParams = new URLSearchParams(params).toString();
      const url = `${API_BASE_URL}/donations${queryParams ? `?${queryParams}` : ''}`;
      
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        }
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('API Response:', errorText);
        throw new Error(`API Error: ${response.status} - ${errorText}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching donations:', error);
      throw error;
    }
  },

  async createDonation(donationData) {
    try {
      const apiKey = getApiKey();
      
      if (!apiKey) {
        throw new Error('API key not configured');
      }

      const response = await fetch(`${API_BASE_URL}/donations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          data: {
            firstName: donationData.firstName,
            lastName: donationData.lastName,
            email: donationData.email,
            amount: parseFloat(donationData.amount) * 100,
            currency: 'USD',
            message: donationData.message || '',
            type: 'ONLINE',
            method: 'CREDIT_CARD'
          }
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('API Response:', errorText);
        throw new Error(`API Error: ${response.status} - ${errorText}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error creating donation:', error);
      throw error;
    }
  },

  async getCampaignStats(campaignUuid) {
    try {
      const apiKey = getApiKey();
      
      if (!apiKey) {
        throw new Error('API key not configured');
      }

      const response = await fetch(`${API_BASE_URL}/campaigns/${campaignUuid}/donations`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        }
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('API Response:', errorText);
        throw new Error(`API Error: ${response.status} - ${errorText}`);
      }

      const data = await response.json();
      
      const total = data.data.reduce((sum, donation) => {
        return sum + (donation.amount / 100);
      }, 0);

      return {
        total,
        count: data.data.length,
        donations: data.data
      };
    } catch (error) {
      console.error('Error fetching campaign stats:', error);
      throw error;
    }
  },

  calculateTotalFromResponse(apiResponse) {
    if (!apiResponse?.data || !Array.isArray(apiResponse.data)) {
      return 0;
    }

    return apiResponse.data.reduce((total, donation) => {
      return total + (donation.amount / 100);
    }, 0);
  }
};

export default donationService;
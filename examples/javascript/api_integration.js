/**
 * Creditum API Integration Example
 * ================================
 * 
 * This example shows how to integrate with the Creditum API
 * using JavaScript/Node.js for credit scoring and stress testing.
 * 
 * Installation:
 *   npm install axios
 * 
 * Usage:
 *   node api_integration.js
 */

const axios = require('axios');

class CreditumAPI {
  constructor(apiKey, baseURL = 'https://api.crcreditum.com/v1') {
    this.apiKey = apiKey;
    this.baseURL = baseURL;
    this.client = axios.create({
      baseURL: this.baseURL,
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json'
      }
    });
  }

  async creditScore(applicantData) {
    try {
      const response = await this.client.post('/credit/score', applicantData);
      return response.data;
    } catch (error) {
      console.error('Credit scoring error:', error.response?.data || error.message);
      throw error;
    }
  }

  async stressTest(portfolioData) {
    try {
      const response = await this.client.post('/stress-test', portfolioData);
      return response.data;
    } catch (error) {
      console.error('Stress test error:', error.response?.data || error.message);
      throw error;
    }
  }

  async getEconomicIndicators(params = {}) {
    try {
      const response = await this.client.get('/economic/indicators', { params });
      return response.data;
    } catch (error) {
      console.error('Economic data error:', error.response?.data || error.message);
      throw error;
    }
  }
}

async function main() {
  // Initialize API client
  const api = new CreditumAPI('your-api-key-here');

  try {
    console.log('Creditum API Integration Demo');
    console.log('============================');

    // Example 1: Credit Scoring
    console.log('\n1. Credit Scoring Example:');
    const applicantData = {
      applicant_type: 'individual',
      credit_score: 720,
      annual_income: 75000,
      debt_to_income: 0.35,
      employment_years: 3,
      loan_amount: 25000,
      loan_purpose: 'auto'
    };

    const scoreResult = await api.creditScore(applicantData);
    console.log(`   Risk Score: ${scoreResult.credit_risk_score}`);
    console.log(`   Risk Grade: ${scoreResult.risk_grade}`);
    console.log(`   Default Probability: ${(scoreResult.probability_of_default * 100).toFixed(1)}%`);

    // Example 2: Economic Indicators
    console.log('\n2. Economic Indicators:');
    const economicData = await api.getEconomicIndicators({
      indicators: 'gdp,unemployment,interest_rates'
    });
    console.log(`   GDP Growth: ${economicData.indicators.gdp_growth}%`);
    console.log(`   Unemployment: ${economicData.indicators.unemployment_rate}%`);

    // Example 3: Stress Testing
    console.log('\n3. Stress Testing Example:');
    const portfolioData = {
      portfolio: [
        {
          loan_id: 'L001',
          current_balance: 50000,
          credit_score: 720,
          industry: 'technology'
        },
        {
          loan_id: 'L002',
          current_balance: 30000,
          credit_score: 650,
          industry: 'retail'
        }
      ],
      scenarios: [
        {
          name: 'recession',
          unemployment_rate: 8.5,
          gdp_change: -2.5,
          interest_rate_change: 1.0
        }
      ]
    };

    const stressResult = await api.stressTest(portfolioData);
    console.log(`   Base Case Expected Loss: ${(stressResult.results.base_case.expected_loss * 100).toFixed(1)}%`);
    console.log(`   Recession Expected Loss: ${(stressResult.results.recession.expected_loss * 100).toFixed(1)}%`);

  } catch (error) {
    console.error('API Demo failed:', error.message);
  }
}

// Rate limiting helper
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Batch processing with rate limiting
async function batchProcess(api, applications, delayMs = 100) {
  const results = [];
  
  for (const application of applications) {
    try {
      const result = await api.creditScore(application);
      results.push(result);
      await delay(delayMs); // Respect rate limits
    } catch (error) {
      console.error('Batch processing error:', error.message);
      results.push({ error: error.message });
    }
  }
  
  return results;
}

// Export for use in other modules
module.exports = { CreditumAPI, batchProcess };

// Run demo if called directly
if (require.main === module) {
  main();
}
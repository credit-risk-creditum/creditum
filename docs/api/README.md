# Creditum API Documentation

## 🌟 Overview

The Creditum API provides programmatic access to our credit risk assessment and stress testing capabilities. Build powerful financial applications with real-time credit scoring, economic data integration, and scenario analysis.

### 🚀 Base URL
```
https://api.crcreditum.com/v1
```

### 🔐 Authentication
All API requests require authentication via API key:
```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
     https://api.crcreditum.com/v1/health
```

---

## 📊 Core Endpoints

### Credit Scoring

#### `POST /credit/score`
Calculate credit risk score for an individual or business.

**Request Body:**
```json
{
  "applicant_type": "individual",
  "credit_score": 720,
  "annual_income": 75000,
  "debt_to_income": 0.35,
  "employment_years": 3,
  "loan_amount": 25000,
  "loan_purpose": "auto"
}
```

**Response:**
```json
{
  "credit_risk_score": 0.15,
  "probability_of_default": 0.08,
  "risk_grade": "B+",
  "factors": {
    "positive": ["stable_employment", "good_credit_history"],
    "negative": ["high_debt_ratio"],
    "neutral": ["loan_purpose"]
  },
  "recommendations": [
    "Consider reducing debt-to-income ratio",
    "Monitor employment stability"
  ]
}
```

### Stress Testing

#### `POST /stress-test`
Perform stress testing on credit portfolios under various economic scenarios.

**Request Body:**
```json
{
  "portfolio": [
    {
      "loan_id": "L001",
      "current_balance": 50000,
      "credit_score": 720,
      "industry": "technology"
    }
  ],
  "scenarios": [
    {
      "name": "recession",
      "unemployment_rate": 8.5,
      "gdp_change": -2.5,
      "interest_rate_change": 1.0
    }
  ]
}
```

**Response:**
```json
{
  "results": {
    "base_case": {
      "expected_loss": 0.05,
      "var_95": 0.12
    },
    "recession": {
      "expected_loss": 0.18,
      "var_95": 0.35,
      "stressed_loans": 15
    }
  }
}
```

### Economic Data

#### `GET /economic/indicators`
Retrieve current economic indicators from FRED.

**Query Parameters:**
- `indicators`: Comma-separated list (gdp, unemployment, interest_rates)
- `start_date`: YYYY-MM-DD format
- `end_date`: YYYY-MM-DD format

**Response:**
```json
{
  "indicators": {
    "gdp_growth": 2.3,
    "unemployment_rate": 3.7,
    "federal_funds_rate": 5.25,
    "inflation_rate": 3.1
  },
  "last_updated": "2025-01-01T12:00:00Z"
}
```

---

## 🏦 Portfolio Management

### `POST /portfolio/create`
Create a new credit portfolio for analysis.

### `GET /portfolio/{id}/metrics`
Get comprehensive risk metrics for a portfolio.

### `POST /portfolio/{id}/simulate`
Run Monte Carlo simulations on portfolio performance.

---

## 🔍 CRA Compliance

### `POST /cra/analysis`
Analyze lending patterns for Community Reinvestment Act compliance.

**Request Body:**
```json
{
  "loans": [
    {
      "amount": 250000,
      "census_tract": "12345",
      "borrower_income": 65000,
      "loan_type": "home_purchase"
    }
  ],
  "assessment_area": "metro_chicago"
}
```

---

## 📈 Rate Limits

| Plan | Requests/Hour | Requests/Day |
|------|---------------|--------------|
| Free | 100 | 1,000 |
| Pro | 1,000 | 10,000 |
| Enterprise | 10,000 | 100,000 |

## 🔧 Error Handling

The API uses conventional HTTP response codes:

- `200` - Success
- `400` - Bad Request
- `401` - Unauthorized
- `429` - Rate Limited
- `500` - Server Error

**Error Response Format:**
```json
{
  "error": {
    "code": "INVALID_CREDIT_SCORE",
    "message": "Credit score must be between 300 and 850",
    "details": {
      "field": "credit_score",
      "provided": 900
    }
  }
}
```

## 📚 SDKs & Libraries

### Python
```bash
pip install creditum-api
```

```python
from creditum import CreditumClient

client = CreditumClient(api_key="your-api-key")
result = client.score_credit({
    "credit_score": 720,
    "annual_income": 75000
})
```

### JavaScript/Node.js
```bash
npm install @creditum/api
```

```javascript
import { CreditumAPI } from '@creditum/api';

const api = new CreditumAPI('your-api-key');
const score = await api.creditScore({
  creditScore: 720,
  annualIncome: 75000
});
```

## 🧪 Testing

### Sandbox Environment
Use our sandbox for testing:
```
https://sandbox-api.crcreditum.com/v1
```

### Test API Key
```
sk_test_1234567890abcdef
```

## 📞 Support

- **Documentation**: [https://docs.crcreditum.com](https://docs.crcreditum.com)
- **Status Page**: [https://status.crcreditum.com](https://status.crcreditum.com)
- **Support**: api-support@crcreditum.com
- **Community**: [GitHub Discussions](https://github.com/credit-risk-creditum/creditum/discussions)

---

*API Version: v1.0 | Last Updated: January 2025*
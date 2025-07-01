"""
Basic Credit Scoring Example
============================

This example demonstrates how to use the Creditum Python package
for basic credit risk assessment.

Installation:
    pip install credit-risk-creditum

Usage:
    python basic_credit_scoring.py
"""

from credit_risk_creditum import CreditRiskModel
import pandas as pd


def main():
    # Initialize the credit risk model
    model = CreditRiskModel()
    
    # Example loan application data
    applicant_data = {
        'credit_score': 720,
        'annual_income': 75000,
        'debt_to_income_ratio': 0.35,
        'employment_length': 3,
        'loan_amount': 25000,
        'loan_purpose': 'auto',
        'home_ownership': 'rent'
    }
    
    # Calculate credit risk score
    risk_score = model.calculate_risk_score(applicant_data)
    
    print(f"Credit Risk Assessment Results:")
    print(f"================================")
    print(f"Risk Score: {risk_score:.3f}")
    print(f"Risk Grade: {model.get_risk_grade(risk_score)}")
    print(f"Default Probability: {model.get_default_probability(risk_score):.2%}")
    
    # Get risk factors
    factors = model.analyze_risk_factors(applicant_data)
    
    print(f"\nRisk Factors:")
    print(f"Positive: {', '.join(factors['positive'])}")
    print(f"Negative: {', '.join(factors['negative'])}")
    
    # Batch processing example
    print(f"\nBatch Processing Example:")
    print(f"========================")
    
    batch_data = pd.DataFrame([
        {'credit_score': 720, 'annual_income': 75000, 'debt_to_income_ratio': 0.35},
        {'credit_score': 650, 'annual_income': 45000, 'debt_to_income_ratio': 0.45},
        {'credit_score': 800, 'annual_income': 120000, 'debt_to_income_ratio': 0.20}
    ])
    
    batch_results = model.batch_score(batch_data)
    
    for i, result in enumerate(batch_results):
        print(f"Applicant {i+1}: Risk Score = {result:.3f}")


if __name__ == "__main__":
    main()
# Changelog

All notable changes to Creditum will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2025-01-02

### 🎉 Major Features
- **Comprehensive Stress Testing**: Full economic scenario analysis with side-by-side normal vs stressed result comparisons
- **Dynamic Recommendations Engine**: Personalized, decision-specific action plans that adapt to APPROVED/DECLINED/CONDITIONAL outcomes  
- **Enhanced AI Explainability**: Intelligent text parsing with visual formatting, section recognition, and metric highlighting
- **Priority-Based Action Items**: Timeline and impact-driven recommendation system with HIGH/MEDIUM/LOW priority classifications

### 🎯 User Experience Enhancements
- **Visual Differentiation**: Clear distinction between normal and stressed economic scenarios with prominent warning banners
- **Complementary Sections**: Eliminated overlap between decision explanations and improvement recommendations
- **Interactive Checklists**: Quick-start action items for immediate user engagement
- **Educational Content**: Comprehensive explanations of stress testing and economic impact

### 🔧 Technical Improvements
- **Dynamic Model Performance Metrics**: Real-time precision, recall, F1-score, and AUC-ROC display
- **Intelligent Content Parsing**: Advanced section recognition and formatting for AI explanations
- **Decision-Specific Logic**: Unique experiences for APPROVED, DECLINED, and CONDITIONAL decisions
- **Enhanced Data Flow**: Improved API response handling and null-safe access patterns

### 📚 Platform Updates
- **Feature Status**: Explainability now fully implemented and available
- **Comprehensive Documentation**: Added user guides for stress testing and recommendation interpretation
- **Educational Resources**: In-depth explanations of economic scenarios and their impact

## [1.0.0] - 2025-01-01

### Added
- Initial public release
- Web-based credit risk simulator
- Python package for credit scoring
- Basic stress testing capabilities
- FRED economic data integration
- CRA compliance heatmap
- Docker deployment support
- Comprehensive documentation

### Features
- **Credit Scoring**: Advanced ML-based credit risk assessment
- **Stress Testing**: Portfolio analysis under adverse scenarios
- **Economic Integration**: Real-time FRED data incorporation
- **Web Interface**: User-friendly simulation tools
- **API Ready**: Foundation for upcoming REST API

### Technical
- FastAPI backend with PostgreSQL
- React/TypeScript frontend
- Docker containerization
- Redis caching layer
- Comprehensive test coverage

## [0.3.0] - 2024-12-15

### Added
- CRA heatmap visualization
- Enhanced portfolio stress testing
- Mobile-responsive design

### Changed
- Improved user interface
- Optimized performance
- Enhanced error handling

### Fixed
- Data validation improvements
- Cross-browser compatibility

## [0.2.0] - 2024-11-30

### Added
- Economic data integration
- Stress testing framework
- User authentication system

### Changed
- Redesigned credit scoring algorithm
- Updated documentation

### Security
- Enhanced data encryption
- Improved access controls

## [0.1.0] - 2024-11-01

### Added
- Initial alpha release
- Basic credit scoring functionality
- Simple web interface
- Core risk assessment features

---

## Release Process

### Version Numbering
- **Major** (X.0.0): Breaking changes, major new features
- **Minor** (0.X.0): New features, backwards compatible
- **Patch** (0.0.X): Bug fixes, minor improvements

### Release Schedule
- **Major releases**: Quarterly
- **Minor releases**: Monthly
- **Patch releases**: As needed

### Support Policy
- **Current version**: Full support
- **Previous major**: Security updates only
- **Older versions**: No support

---

## Getting Updates

### Web Application
Updates are deployed automatically. No action required.

### Python Package
```bash
pip install --upgrade credit-risk-creditum
```

### API
API versions are maintained for backwards compatibility.
Deprecated endpoints will have 6-month sunset periods.

---

*For detailed technical changes, see our [GitHub releases](https://github.com/credit-risk-creditum/creditum/releases).*
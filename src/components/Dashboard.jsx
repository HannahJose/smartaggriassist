import { Sprout, Leaf, MessageCircle } from 'lucide-react';
import './Dashboard.css';

function Dashboard() {
  const handleNavigation = (feature) => {
    console.log(`Navigating to ${feature}`);
  };

  return (
    <div className="dashboard-container">
      <div className="background-decoration">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <div className="dashboard-content">
        <header className="dashboard-header">
          <div className="logo-section">
            <div className="logo-icon">
              <Sprout size={32} />
            </div>
            <h1 className="brand-name">SmartAgriAssist</h1>
          </div>
          <p className="tagline">Your intelligent farming companion</p>
        </header>

        <section className="welcome-section">
          <h2 className="welcome-title">Welcome back!</h2>
          <p className="welcome-subtitle">
            Empowering farmers with AI-driven insights for smarter, sustainable agriculture
          </p>
        </section>

        <div className="action-cards">
          <div
            className="action-card card-green"
            onClick={() => handleNavigation('crop-recommendation')}
          >
            <div className="card-icon-wrapper">
              <div className="card-icon">
                <Sprout size={40} />
              </div>
            </div>
            <div className="card-content">
              <h3 className="card-title">Crop & Fertilizer</h3>
              <p className="card-description">
                Get personalized crop and fertilizer recommendations based on soil conditions
              </p>
            </div>
            <div className="card-arrow">→</div>
          </div>

          <div
            className="action-card card-orange"
            onClick={() => handleNavigation('disease-prediction')}
          >
            <div className="card-icon-wrapper">
              <div className="card-icon">
                <Leaf size={40} />
              </div>
            </div>
            <div className="card-content">
              <h3 className="card-title">Leaf Disease Detection</h3>
              <p className="card-description">
                Upload leaf images to identify diseases and get treatment suggestions
              </p>
            </div>
            <div className="card-arrow">→</div>
          </div>

          <div
            className="action-card card-blue"
            onClick={() => handleNavigation('ai-chatbot')}
          >
            <div className="card-icon-wrapper">
              <div className="card-icon">
                <MessageCircle size={40} />
              </div>
            </div>
            <div className="card-content">
              <h3 className="card-title">AI Assistant</h3>
              <p className="card-description">
                Chat with our AI assistant for instant farming advice and solutions
              </p>
            </div>
            <div className="card-arrow">→</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

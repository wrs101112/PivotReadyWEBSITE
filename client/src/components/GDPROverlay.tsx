import { useState } from "react";
import { X, Shield, Eye, Download, Trash2, Edit, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const GDPROverlay = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('overview');

  const sections = {
    overview: {
      title: 'GDPR Compliance Overview',
      icon: Shield,
      content: (
        <div className="space-y-4">
          <p className="text-[#2F2F2F] leading-relaxed">
            At PivotReady, we are committed to protecting your personal data and ensuring full compliance 
            with the General Data Protection Regulation (GDPR). This overlay provides transparent information 
            about how we collect, process, and protect your data.
          </p>
          <div className="bg-[#EDF6F9] p-4 rounded-lg border-l-4 border-[#4A7C74]">
            <h4 className="font-semibold text-[#4A7C74] mb-2">Your Data Protection Rights</h4>
            <p className="text-sm text-[#2F2F2F]">
              Under GDPR, you have comprehensive rights over your personal data, including the right to 
              access, rectify, erase, restrict processing, data portability, and object to processing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
            <div className="bg-white p-3 rounded-lg border border-gray-200">
              <h5 className="font-medium text-[#4A7C74] mb-1">Data Controller</h5>
              <p className="text-sm text-[#2F2F2F]">PivotReady.eu</p>
            </div>
            <div className="bg-white p-3 rounded-lg border border-gray-200">
              <h5 className="font-medium text-[#4A7C74] mb-1">Legal Basis</h5>
              <p className="text-sm text-[#2F2F2F]">Consent & Legitimate Interest</p>
            </div>
            <div className="bg-white p-3 rounded-lg border border-gray-200">
              <h5 className="font-medium text-[#4A7C74] mb-1">Data Retention</h5>
              <p className="text-sm text-[#2F2F2F]">24 months maximum</p>
            </div>
            <div className="bg-white p-3 rounded-lg border border-gray-200">
              <h5 className="font-medium text-[#4A7C74] mb-1">Third-Party Sharing</h5>
              <p className="text-sm text-[#2F2F2F]">Only with explicit consent</p>
            </div>
          </div>
        </div>
      )
    },
    dataCollection: {
      title: 'Data Collection & Processing',
      icon: Eye,
      content: (
        <div className="space-y-4">
          <h4 className="font-semibold text-[#4A7C74] mb-3">What Data We Collect</h4>
          <div className="space-y-3">
            <div className="bg-gray-50 p-3 rounded-lg">
              <h5 className="font-medium text-[#2F2F2F] mb-2">Essential Data</h5>
              <ul className="text-sm text-[#2F2F2F] space-y-1">
                <li>• Contact form submissions (name, email, message)</li>
                <li>• Technical data for website functionality</li>
                <li>• IP address and browser information</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <h5 className="font-medium text-[#2F2F2F] mb-2">Analytics Data (with consent)</h5>
              <ul className="text-sm text-[#2F2F2F] space-y-1">
                <li>• Page views and user interactions</li>
                <li>• Device and browser statistics</li>
                <li>• Referral sources and traffic patterns</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <h5 className="font-medium text-[#2F2F2F] mb-2">Marketing Data (with consent)</h5>
              <ul className="text-sm text-[#2F2F2F] space-y-1">
                <li>• Email preferences and engagement</li>
                <li>• Campaign interaction data</li>
                <li>• Social media integration data</li>
              </ul>
            </div>
          </div>
          <div className="bg-[#EDF6F9] p-4 rounded-lg">
            <h5 className="font-medium text-[#4A7C74] mb-2">Purpose of Processing</h5>
            <p className="text-sm text-[#2F2F2F]">
              We process your data to provide our services, improve user experience, send requested 
              communications, and comply with legal obligations. All processing is based on legitimate 
              grounds under GDPR.
            </p>
          </div>
        </div>
      )
    },
    yourRights: {
      title: 'Your Rights Under GDPR',
      icon: FileText,
      content: (
        <div className="space-y-4">
          <p className="text-[#2F2F2F] mb-4">
            As a data subject under GDPR, you have the following rights regarding your personal data:
          </p>
          <div className="grid gap-4">
            <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
              <Eye className="w-5 h-5 text-[#4A7C74] mt-0.5" />
              <div>
                <h5 className="font-medium text-[#2F2F2F] mb-1">Right of Access</h5>
                <p className="text-sm text-gray-600">
                  Request information about what personal data we hold about you and how it's processed.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
              <Edit className="w-5 h-5 text-[#4A7C74] mt-0.5" />
              <div>
                <h5 className="font-medium text-[#2F2F2F] mb-1">Right of Rectification</h5>
                <p className="text-sm text-gray-600">
                  Request correction of inaccurate or incomplete personal data.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
              <Trash2 className="w-5 h-5 text-[#4A7C74] mt-0.5" />
              <div>
                <h5 className="font-medium text-[#2F2F2F] mb-1">Right of Erasure</h5>
                <p className="text-sm text-gray-600">
                  Request deletion of your personal data under certain circumstances.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
              <Download className="w-5 h-5 text-[#4A7C74] mt-0.5" />
              <div>
                <h5 className="font-medium text-[#2F2F2F] mb-1">Right of Data Portability</h5>
                <p className="text-sm text-gray-600">
                  Request a copy of your data in a structured, machine-readable format.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#EDF6F9] p-4 rounded-lg">
            <h5 className="font-medium text-[#4A7C74] mb-2">How to Exercise Your Rights</h5>
            <p className="text-sm text-[#2F2F2F] mb-2">
              To exercise any of these rights, please contact us using the information below. 
              We will respond to your request within 30 days.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <Mail className="w-4 h-4 text-[#4A7C74]" />
              <span className="text-[#2F2F2F]">privacy@pivotready.eu</span>
            </div>
          </div>
        </div>
      )
    },
    contact: {
      title: 'Data Protection Contact',
      icon: Mail,
      content: (
        <div className="space-y-4">
          <div className="bg-[#EDF6F9] p-4 rounded-lg">
            <h4 className="font-semibold text-[#4A7C74] mb-3">Data Protection Officer</h4>
            <div className="space-y-2 text-sm text-[#2F2F2F]">
              <p><strong>Organization:</strong> PivotReady.eu</p>
              <p><strong>Email:</strong> privacy@pivotready.eu</p>
              <p><strong>Response Time:</strong> Within 30 days</p>
            </div>
          </div>
          <div className="space-y-3">
            <h5 className="font-medium text-[#4A7C74]">For GDPR-related inquiries, please include:</h5>
            <ul className="text-sm text-[#2F2F2F] space-y-1 pl-4">
              <li>• Your full name and contact information</li>
              <li>• Specific details of your request</li>
              <li>• Any relevant account or reference numbers</li>
              <li>• Proof of identity (for security purposes)</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h5 className="font-medium text-[#2F2F2F] mb-2">Supervisory Authority</h5>
            <p className="text-sm text-[#2F2F2F]">
              If you believe your data protection rights have been violated, you have the right to 
              lodge a complaint with your local data protection supervisory authority.
            </p>
          </div>
          <div className="text-center pt-4">
            <Button
              onClick={() => window.open('mailto:privacy@pivotready.eu?subject=GDPR Inquiry', '_blank')}
              className="bg-[#4A7C74] hover:bg-opacity-90 text-white"
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact Data Protection Officer
            </Button>
          </div>
        </div>
      )
    }
  };

  return (
    <>
      {/* GDPR Info Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 right-4 bg-[#4A7C74] hover:bg-opacity-90 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 z-40"
        aria-label="GDPR Information"
      >
        <Shield className="w-5 h-5" />
      </button>

      {/* GDPR Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            {/* Header */}
            <div className="bg-[#4A7C74] text-white p-6 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Shield className="w-6 h-6" />
                <h2 className="text-xl font-bold">GDPR Compliance Center</h2>
              </div>
              <Button
                onClick={() => setIsOpen(false)}
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white hover:bg-opacity-20"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="flex flex-1 overflow-hidden">
              {/* Sidebar Navigation */}
              <div className="w-64 bg-gray-50 border-r border-gray-200 p-4">
                <nav className="space-y-2">
                  {Object.entries(sections).map(([key, section]) => {
                    const IconComponent = section.icon;
                    return (
                      <button
                        key={key}
                        onClick={() => setActiveSection(key)}
                        className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-colors ${
                          activeSection === key
                            ? 'bg-[#4A7C74] text-white'
                            : 'text-[#2F2F2F] hover:bg-gray-100'
                        }`}
                      >
                        <IconComponent className="w-4 h-4" />
                        <span className="text-sm font-medium">{section.title}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Content Area */}
              <div className="flex-1 p-6 overflow-y-auto">
                <h3 className="text-2xl font-bold text-[#4A7C74] mb-6">
                  {sections[activeSection as keyof typeof sections].title}
                </h3>
                {sections[activeSection as keyof typeof sections].content}
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 p-4 border-t border-gray-200">
              <p className="text-xs text-gray-600 text-center">
                Last updated: {new Date().toLocaleDateString()} | 
                This information is provided in compliance with GDPR requirements | 
                For questions, contact privacy@pivotready.eu
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GDPROverlay;
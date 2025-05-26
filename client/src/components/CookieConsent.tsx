import { useState, useEffect } from "react";
import { X, Settings, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

interface CookiePreferences {
  essential: boolean;
  performance: boolean;
  marketing: boolean;
  timestamp: number;
}

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    performance: false,
    marketing: false,
    timestamp: 0
  });

  useEffect(() => {
    const checkCookieConsent = () => {
      const stored = localStorage.getItem('pivotready-cookie-consent');
      if (stored) {
        const parsedPreferences: CookiePreferences = JSON.parse(stored);
        const now = Date.now();
        const twentyFourHours = 24 * 60 * 60 * 1000;
        
        if (now - parsedPreferences.timestamp < twentyFourHours) {
          // User has made a choice within 24 hours
          setPreferences(parsedPreferences);
          return;
        }
      }
      // Show banner if no valid consent found
      setShowBanner(true);
    };

    checkCookieConsent();
  }, []);

  const savePreferences = (newPreferences: Omit<CookiePreferences, 'timestamp'>) => {
    const preferencesWithTimestamp = {
      ...newPreferences,
      timestamp: Date.now()
    };
    localStorage.setItem('pivotready-cookie-consent', JSON.stringify(preferencesWithTimestamp));
    setPreferences(preferencesWithTimestamp);
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleAcceptAll = () => {
    savePreferences({
      essential: true,
      performance: true,
      marketing: true
    });
  };

  const handleAcceptSelected = () => {
    savePreferences(preferences);
  };

  const handleDeclineOptional = () => {
    savePreferences({
      essential: true,
      performance: false,
      marketing: false
    });
  };

  const openSettings = () => {
    setShowSettings(true);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-[#4A7C74] shadow-lg z-50 p-4 md:p-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-[#4A7C74] mb-2">We Value Your Privacy</h3>
              <p className="text-sm text-[#2F2F2F] mb-4 md:mb-0">
                We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
                You can choose which types of cookies to accept.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 min-w-fit">
              <Button
                onClick={openSettings}
                variant="outline"
                className="text-[#4A7C74] border-[#4A7C74] hover:bg-[#4A7C74] hover:text-white text-sm"
              >
                <Settings className="w-4 h-4 mr-2" />
                Cookie Settings
              </Button>
              <Button
                onClick={handleDeclineOptional}
                variant="outline"
                className="text-gray-600 border-gray-300 hover:bg-gray-100 text-sm"
              >
                Essential Only
              </Button>
              <Button
                onClick={handleAcceptAll}
                className="bg-[#4A7C74] hover:bg-opacity-90 text-white text-sm"
              >
                <Check className="w-4 h-4 mr-2" />
                Accept All
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Cookie Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60] p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-[#4A7C74]">Cookie Preferences</h2>
                <Button
                  onClick={() => setShowSettings(false)}
                  variant="ghost"
                  size="sm"
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="space-y-6">
                {/* Essential Cookies */}
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-[#2F2F2F]">Essential Cookies</h3>
                    <Switch checked={true} disabled className="opacity-50" />
                  </div>
                  <p className="text-sm text-gray-600">
                    These cookies are necessary for the website to function properly. They enable basic features 
                    like page navigation, form submissions, and access to secure areas. The website cannot function 
                    properly without these cookies.
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Always active</p>
                </div>

                {/* Performance Cookies */}
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-[#2F2F2F]">Performance Cookies</h3>
                    <Switch
                      checked={preferences.performance}
                      onCheckedChange={(checked) => 
                        setPreferences(prev => ({ ...prev, performance: checked }))
                      }
                    />
                  </div>
                  <p className="text-sm text-gray-600">
                    These cookies help us understand how visitors interact with our website by collecting 
                    and reporting information anonymously. This helps us improve the website's performance 
                    and user experience.
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Used for: Analytics, site performance monitoring
                  </p>
                </div>

                {/* Marketing Cookies */}
                <div className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-[#2F2F2F]">Marketing Cookies</h3>
                    <Switch
                      checked={preferences.marketing}
                      onCheckedChange={(checked) => 
                        setPreferences(prev => ({ ...prev, marketing: checked }))
                      }
                    />
                  </div>
                  <p className="text-sm text-gray-600">
                    These cookies are used to deliver relevant advertisements and track the effectiveness 
                    of marketing campaigns. They may be set by third-party advertising partners and used 
                    to build a profile of your interests.
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Used for: Targeted advertising, social media integration, campaign tracking
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <Button
                  onClick={handleAcceptSelected}
                  className="bg-[#4A7C74] hover:bg-opacity-90 text-white flex-1"
                >
                  Save Preferences
                </Button>
                <Button
                  onClick={handleAcceptAll}
                  variant="outline"
                  className="text-[#4A7C74] border-[#4A7C74] hover:bg-[#4A7C74] hover:text-white flex-1"
                >
                  Accept All Cookies
                </Button>
              </div>

              <p className="text-xs text-gray-500 mt-4 text-center">
                You can change your preferences at any time by visiting our Cookie Policy page. 
                Your choices will be remembered for 24 hours.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
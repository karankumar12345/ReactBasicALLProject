import React, { createContext,useState,useEffect } from "react";
import featureFlagsDataServiceCall from "./data";


export const FeatureFlagsContext = createContext(null);

export default function FeatureFlagsGlobalState({ children }) {
  const [loading, setLoading] = useState(true);
  const [featureFlags, setFeatureFlags] = useState(null);

  useEffect(() => {
    featureFlagsDataServiceCall()
      .then((flags) => {
        setFeatureFlags(flags);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching feature flags:", error));
  }, []);

  if (loading) return <h1>Loading Data, Please Wait...</h1>;

  return (
    <FeatureFlagsContext.Provider value={{ featureFlags }}>
      {children}
    </FeatureFlagsContext.Provider>
  );
}


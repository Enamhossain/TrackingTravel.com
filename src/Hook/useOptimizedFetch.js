import { useState, useEffect, useCallback } from 'react';

const cache = new Map();

/**
 * Enhanced fetch hook with caching, loading, and error states.
 * @param {string} url - API endpoint
 * @param {object} options - Fetch options
 */
export const useOptimizedFetch = (url, options = {}) => {
  const [data, setData] = useState(cache.get(url) || null);
  const [loading, setLoading] = useState(!cache.has(url));
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(url, options);
      if (!response.ok) throw new Error(`Error: ${response.status} ${response.statusText}`);
      
      const result = await response.json();
      
      // Store in cache for "instant" loading on next visit
      cache.set(url, result);
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [url, JSON.stringify(options)]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
};

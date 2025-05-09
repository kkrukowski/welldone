import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

function TestSupabase() {
  const [connectionStatus, setConnectionStatus] = useState('Testing...');

  useEffect(() => {
    const testConnection = async () => {
      try {
        // Test the connection by attempting to fetch data
        const { data, error } = await supabase
          .from('posts')  // replace with your table name
          .select('*')
          .limit(1);

        if (error) {
          setConnectionStatus('Connection Error: ' + error.message);
          console.error('Supabase connection error:', error);
        } else {
          setConnectionStatus('Connection Successful!');
          console.log('Supabase connection successful! Data:', data);
        }
      } catch (error) {
        setConnectionStatus('Connection Error: ' + error.message);
        console.error('Error:', error);
      }
    };

    testConnection();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h3>Supabase Connection Test</h3>
      <p>Status: {connectionStatus}</p>
    </div>
  );
}

export default TestSupabase;
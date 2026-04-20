/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Splash } from './components/Splash';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      {showSplash && <Splash onComplete={() => setShowSplash(false)} />}

      {!showSplash && (
        <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
          <h1 className="text-4xl font-bold">Hello World - Site is working!</h1>
        </div>
      )}
    </div>
  );
}
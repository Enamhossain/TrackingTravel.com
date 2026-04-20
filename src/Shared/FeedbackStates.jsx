import React from 'react';
import { motion } from 'framer-motion';

const Skeleton = ({ className }) => (
  <div className={`animate-pulse bg-slate-200 rounded-2xl ${className}`} />
);

export const CardSkeleton = () => (
  <div className="bg-white rounded-3xl p-4 border border-slate-100 shadow-sm">
    <Skeleton className="aspect-video w-full mb-4" />
    <Skeleton className="h-6 w-3/4 mb-2" />
    <Skeleton className="h-4 w-1/2 mb-6" />
    <div className="flex justify-between items-center">
      <Skeleton className="h-8 w-24" />
      <Skeleton className="h-8 w-20" />
    </div>
  </div>
);

export const PageLoading = () => (
  <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-[100] flex flex-col items-center justify-center">
    <div className="relative">
      <div className="w-16 h-16 border-4 border-brand-primary/10 border-t-brand-primary rounded-full animate-spin" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-8 h-8 bg-brand-secondary rounded-full animate-ping opacity-75" />
      </div>
    </div>
    <p className="mt-6 text-brand-primary font-display font-black uppercase tracking-widest text-sm animate-pulse">
      TrackingTravel
    </p>
  </div>
);

export const ErrorState = ({ message, onRetry }) => (
  <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
    <div className="w-20 h-20 bg-brand-secondary/10 rounded-full flex items-center justify-center text-brand-secondary mb-6">
      <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
    </div>
    <h3 className="text-2xl font-display font-black text-brand-primary mb-2">Something went wrong</h3>
    <p className="text-slate-500 max-w-md mb-8">{message || "We couldn't load the data. Please check your connection and try again."}</p>
    {onRetry && (
      <button 
        onClick={onRetry}
        className="px-8 py-3 bg-brand-primary text-white rounded-xl font-bold hover:bg-brand-secondary transition-all shadow-lg shadow-brand-primary/20"
      >
        Try Again
      </button>
    )}
  </div>
);

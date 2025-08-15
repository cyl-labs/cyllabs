import React from 'react';
import { Check, X } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const PricingTable: React.FC = () => {
  const plans = [
    {
      name: 'Basic Plan',
      description: 'Best for personal use',
      bgColor: 'bg-gray-500',
      textColor: 'text-white',
    },
    {
      name: 'Business Plan',
      description: 'Perfect for small startups',
      bgColor: 'bg-gray-700',
      textColor: 'text-white',
    },
    {
      name: 'Enterprise Plan',
      description: 'Perfect for growing businesses',
      bgColor: 'bg-orange-500',
      textColor: 'text-white',
    },
  ];

  const features = [
    {
      name: 'Number of revisions',
      basic: 'Up to 3',
      business: 'Up to 5',
      enterprise: 'Unlimited',
    },
    {
      name: 'Number of pages',
      basic: 'Up to 5',
      business: 'Up to 10',
      enterprise: 'Unlimited',
    },
    {
      name: 'Number of minor edits / year',
      basic: 'Up to 6',
      business: 'Up to 12',
      enterprise: 'Unlimited',
    },
    {
      name: 'Animated sections',
      basic: false,
      business: true,
      enterprise: true,
    },
    {
      name: 'CMS section',
      basic: false,
      business: false,
      enterprise: true,
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] 
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.98
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const headerVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: -30 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const tableRowVariants: Variants = {
    hidden: { 
      opacity: 0, 
      x: -20 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const iconVariants: Variants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: {
        duration: 0.4,
        ease: [0.34, 1.56, 0.64, 1]
      }
    }
  };

  const renderFeatureValue = (value: string | boolean, isEnterprise: boolean = false) => {
    if (typeof value === 'boolean') {
      if (value) {
        return (
          <div className="flex justify-center">
            <motion.div 
              variants={iconVariants}
              className={`w-6 h-6 rounded-full ${isEnterprise ? 'bg-orange-500' : 'bg-orange-500'} flex items-center justify-center shadow-sm`}
            >
              <Check className="w-3 h-3 text-white" />
            </motion.div>
          </div>
        );
      } else {
        return (
          <div className="flex justify-center">
            <motion.div 
              variants={iconVariants}
              className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center"
            >
              <X className="w-3 h-3 text-gray-400" />
            </motion.div>
          </div>
        );
      }
    }
    return (
      <motion.span 
        variants={itemVariants}
        className="text-center block font-medium"
      >
        {value}
      </motion.span>
    );
  };

  const renderMobileFeatureValue = (value: string | boolean, isEnterprise: boolean = false) => {
    if (typeof value === 'boolean') {
      if (value) {
        return (
          <div className="flex items-center justify-center">
            <motion.div 
              variants={iconVariants}
              className={`w-5 h-5 rounded-full ${isEnterprise ? 'bg-orange-500' : 'bg-orange-500'} flex items-center justify-center mr-2 shadow-sm`}
            >
              <Check className="w-3 h-3 text-white" />
            </motion.div>
          </div>
        );
      } else {
        return (
          <div className="flex items-center justify-center">
            <motion.div 
              variants={iconVariants}
              className="w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center mr-2"
            >
              <X className="w-3 h-3 text-gray-400" />
            </motion.div>
          </div>
        );
      }
    }
    return (
      <motion.span 
        variants={itemVariants}
        className="text-sm font-medium mr-2"
      >
        {value}
      </motion.span>
    );
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-white mx-auto box-border w-full max-w-[1600px] p-4 sm:p-6 md:p-8 lg:px-12 xl:px-20 2xl:px-24 flex flex-col text-black"
    >
      {/* Header */}
      <motion.div 
        variants={headerVariants}
        className="text-left mb-8 md:mb-12"
      >
        <motion.h1 
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Choose a plan that's{' '}
          <motion.span 
            className="text-orange-500"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
          >
            right
          </motion.span>{' '}
          for you
        </motion.h1>
        <motion.p 
          className="text-gray-600 text-base md:text-lg tracking-tight"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          We believe this should be accessible to all businesses, no matter the size.
        </motion.p>
      </motion.div>

      {/* Desktop View */}
      <div className="hidden md:block tracking-tight w-full mx-auto">
        <div className="rounded-lg overflow-hidden">
          {/* Pricing Cards */}
          <div className="grid grid-cols-4 gap-4 lg:gap-8 xl:gap-12 mb-6">
            <div></div>
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`${plan.bgColor} rounded-2xl p-4 lg:p-6 h-32 lg:h-36 justify-center flex flex-col shadow-lg`}
              >
                <motion.h3 
                  className="text-lg lg:text-2xl font-bold mb-2 text-white"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  {plan.name}
                </motion.h3>
                <motion.p 
                  className="text-gray-300 text-xs lg:text-sm"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                >
                  {plan.description}
                </motion.p>
              </motion.div>
            ))}
          </div>

          {/* Table Header */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-4 gap-4 p-4 border-b border-gray-200 bg-gray-50/50"
          >
            <div className="font-bold text-gray-800">Overview</div>
            <div></div>
            <div></div>
            <div></div>
          </motion.div>

          {/* Table Rows */}
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={tableRowVariants}
              className={`grid grid-cols-4 tracking-normal gap-4 p-4 ${
                index < features.length - 1 ? 'border-b border-gray-100' : ''
              }`}
            >
              <motion.div 
                className="font-semibold text-sm lg:text-base text-gray-800"
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 1.2 + index * 0.05 }}
              >
                {feature.name}
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 1.4 + index * 0.05 }}
              >
                {renderFeatureValue(feature.basic)}
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 1.5 + index * 0.05 }}
              >
                {renderFeatureValue(feature.business)}
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 1.6 + index * 0.05 }}
              >
                {renderFeatureValue(feature.enterprise, true)}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden space-y-6 tracking-normal">
        {plans.map((plan, planIndex) => (
          <motion.div 
            key={planIndex} 
            variants={cardVariants}
            className="rounded-2xl border border-gray-200 overflow-hidden shadow-lg"
          >
            {/* Plan Header */}
            <motion.div 
              className={`${plan.bgColor} p-4 text-center`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + planIndex * 0.2 }}
            >
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{plan.name}</h3>
              <p className="text-gray-300 text-xs sm:text-sm">{plan.description}</p>
            </motion.div>
            
            {/* Plan Features */}
            <motion.div 
              className="p-3 sm:p-4 space-y-3 sm:space-y-4"
              variants={containerVariants}
            >
              {features.map((feature, featureIndex) => {
                let featureValue;
                if (planIndex === 0) featureValue = feature.basic;
                else if (planIndex === 1) featureValue = feature.business;
                else featureValue = feature.enterprise;
                
                return (
                  <motion.div 
                    key={featureIndex} 
                    variants={itemVariants}
                    className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0"
                  >
                    <div className="font-semibold text-xs sm:text-sm pr-4 text-gray-800">{feature.name}</div>
                    <div className="flex-shrink-0">
                      {renderMobileFeatureValue(featureValue, planIndex === 2)}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default PricingTable;

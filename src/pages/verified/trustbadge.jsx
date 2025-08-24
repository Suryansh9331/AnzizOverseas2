import React from "react";
import { CheckCircle2, FileText, Target, Award, ArrowRight } from "lucide-react";
import TrustBadgeImg from "../../assets/verefied/trust-badge.png";
import VerifyImg from "../../assets/verefied/verify.png";
import CopyImg from "../../assets/verefied/copy.png";
import GoalImg from "../../assets/verefied/goal.png";


const TrustBadge = () => {
    return (
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Title Section */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                            Trust Badge
                        </h2>
                        <img 
                            src={TrustBadgeImg} 
                            alt="trust badge icon" 
                            className="w-10 h-10"
                        />
                    </div>
                </div>

                {/* Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    
                    {/* Card 1 - Verified by Anji's Overseas */}
                    <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 hover:shadow-lg transition-shadow duration-300">
                        <div className="mb-6">
                            <img 
                                src={VerifyImg}
                                alt="verified icon" 
                                className="w-8 h-8 mb-6"
                            />
                        </div>
                        
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                Verified by Anji's
                            </h3>
                            <h3 className="text-xl font-semibold text-gray-900">
                                Overseas
                            </h3>
                        </div>
                        
                        <button className="flex items-center gap-2 text-gray-600 font-medium hover:text-gray-800 transition-colors duration-200">
                            <span>Read More</span>
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Card 2 - Documents Checked */}
                    <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 hover:shadow-lg transition-shadow duration-300">
                        <div className="mb-6">
                            <img 
                                src={CopyImg}
                                alt="documents icon" 
                                className="w-6 h-8 mb-6"
                            />
                        </div>
                        
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                Documents
                            </h3>
                            <h3 className="text-xl font-semibold text-gray-900">
                                Checked
                            </h3>
                        </div>
                        
                        <button className="flex items-center gap-2 text-gray-600 font-medium hover:text-gray-800 transition-colors duration-200">
                            <span>Read More</span>
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Card 3 - On-time Delivery Track Record */}
                    <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 hover:shadow-lg transition-shadow duration-300">
                        <div className="mb-6">
                            <img 
                                src={GoalImg}
                                alt="delivery icon" 
                                className="w-8 h-8 mb-6"
                            />
                        </div>
                        
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                On-time Delivery
                            </h3>
                            <h3 className="text-xl font-semibold text-gray-900">
                                Track Record
                            </h3>
                        </div>
                        
                        <button className="flex items-center gap-2 text-gray-600 font-medium hover:text-gray-800 transition-colors duration-200">
                            <span>Read More</span>
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TrustBadge;

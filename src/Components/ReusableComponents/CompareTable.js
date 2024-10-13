import React from 'react'

const CompareTable = () => {
  return (
        <div className="container mx-auto p-4">
            <h1 className="text-center text-2xl font-bold mb-4">Proprietorship vs Limited Liability Partnership (LLP) vs Company</h1>
            <table className="table-auto w-full border-collapse border border-gray-400">
                <thead>
                    <tr>
                        <th className="border border-gray-400 p-2">Features</th>
                        <th className="border border-gray-400 p-2">Proprietorship</th>
                        <th className="border border-gray-400 p-2">Partnership</th>
                        <th className="border border-gray-400 p-2">LLP</th>
                        <th className="border border-gray-400 p-2">Company</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-400 p-2">Definition</td>
                        <td className="border border-gray-400 p-2">Unregistered type of business entity managed by one single person</td>
                        <td className="border border-gray-400 p-2">A formal agreement between two or more parties to manage and operate a business</td>
                        <td className="border border-gray-400 p-2">A Limited Liability Partnership is a hybrid combination having features similar to a partnership firm and liabilities similar to a company.</td>
                        <td className="border border-gray-400 p-2">Registered type of entity with limited liability to the owners and shareholders</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-400 p-2">Ownership</td>
                        <td className="border border-gray-400 p-2"><i className="fas fa-check check-icon"></i> Sole Ownership</td>
                        <td className="border border-gray-400 p-2">
                            <i className="fas fa-check check-icon"></i> Min 2 Partners<br />
                            <i className="fas fa-check check-icon"></i> Max 50 Partners
                        </td>
                        <td className="border border-gray-400 p-2">
                            <i className="fas fa-check check-icon"></i> Designated Partners
                        </td>
                        <td className="border border-gray-400 p-2">
                            <i className="fas fa-check check-icon"></i> Min 2 Directors<br />
                            <i className="fas fa-check check-icon"></i> Min 2 Shareholders<br />
                            <i className="fas fa-check check-icon"></i> Max 15 Directors<br />
                            <i className="fas fa-check check-icon"></i> Max 200 Shareholders<br />
                            <br />
                            For <strong>One Person Company</strong><br />
                            <i className="fas fa-check check-icon"></i> 1 Director<br />
                            <i className="fas fa-check check-icon"></i> 1 Nominee Director
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-400 p-2">Registration Time</td>
                        <td className="border border-gray-400 p-2"></td>
                        <td className="border border-gray-400 p-2"></td>
                        <td className="border border-gray-400 p-2">7-9 working days</td>
                        <td className="border border-gray-400 p-2"></td>
                    </tr>
                    <tr>
                        <td className="border border-gray-400 p-2">Promoter Liability</td>
                        <td className="border border-gray-400 p-2">Unlimited Liability</td>
                        <td className="border border-gray-400 p-2"></td>
                        <td className="border border-gray-400 p-2">Limited Liability</td>
                        <td className="border border-gray-400 p-2"></td>
                    </tr>
                    <tr>
                        <td className="border border-gray-400 p-2">Documentation</td>
                        <td className="border border-gray-400 p-2">
                            <i className="fas fa-check check-icon"></i> MSME<br />
                            <i className="fas fa-check check-icon"></i> GST Registration
                        </td>
                        <td className="border border-gray-400 p-2">
                            <i className="fas fa-check check-icon"></i> Partnership Deed
                        </td>
                        <td className="border border-gray-400 p-2">
                            <i className="fas fa-check check-icon"></i> LLP Deed<br />
                            <i className="fas fa-check check-icon"></i> Incorporation Certificate
                        </td>
                        <td className="border border-gray-400 p-2">
                            <i className="fas fa-check check-icon"></i> MOA<br />
                            <i className="fas fa-check check-icon"></i> AOA<br />
                            <i className="fas fa-check check-icon"></i> Incorporation Certificate
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-400 p-2">Governance</td>
                        <td className="border border-gray-400 p-2">-</td>
                        <td className="border border-gray-400 p-2">Under Partnership Act</td>
                        <td className="border border-gray-400 p-2">LLP Act, 2008</td>
                        <td className="border border-gray-400 p-2">Under Companies Act, 2013</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-400 p-2">Transferability</td>
                        <td className="border border-gray-400 p-2">Non Transferable</td>
                        <td className="border border-gray-400 p-2">Transferable if registered under ROF</td>
                        <td className="border border-gray-400 p-2">Transferable</td>
                        <td className="border border-gray-400 p-2"></td>
                    </tr>
                    <tr>
                        <td className="border border-gray-400 p-2">Compliance Requirements</td>
                        <td className="border border-gray-400 p-2">
                            <i className="fas fa-check check-icon"></i> Income tax filing if turnover is more than Rs.2.5 lakhs
                        </td>
                        <td className="border border-gray-400 p-2">
                            <i className="fas fa-check check-icon"></i> ITR 5
                        </td>
                        <td className="border border-gray-400 p-2">
                            <i className="fas fa-check check-icon"></i> Form 11<br />
                            <i className="fas fa-check check-icon"></i> Form 8<br />
                            <i className="fas fa-check check-icon"></i> ITR 5
                        </td>
                        <td className="border border-gray-400 p-2">
                            <i className="fas fa-check check-icon"></i> ITR 6<br />
                            <i className="fas fa-check check-icon"></i> MCA filing<br />
                            <i className="fas fa-check check-icon"></i> Auditor's appointment<br />
                            <i className="fas fa-check check-icon"></i> Know More
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default CompareTable
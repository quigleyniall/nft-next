import { AccountDetailsProps } from 'account-details';
import React, { useState } from 'react';
import AccountDataTable from '../../components/Accounts/AccountsDataTable';
import AccountSelector from  '../../components/Accounts/AccountSelector';
import Dashboard from '@/components/Dashboard/Dashboard';

const AccountSection = () => {
    const [accountDetails, setAccountDetails] = useState();
    const [loading, setLoading] = useState(false);
    return (
        <Dashboard>
        <section className="mt-40 container w-full justify-between items-center mx-auto">
            <p className="text-lg font-semibold mb-4">Available Account(s)</p>

            <div className="grid grid-cols-3 gap-2">
                <AccountSelector
                    setAccountDetails={setAccountDetails}
                    setLoading={setLoading}
                />
                <div className="col-span-2">
                    {loading ? (
                        <div className="flex h-full">
                            <div className="m-auto">
                                Loading....
                            </div>
                        </div>
                    ) : (
                        <AccountDataTable accountDetails={accountDetails} />
                    )}
                </div>
            </div>
        </section>
        </Dashboard>
    );
};

export default AccountSection;

import TextInput from '../forms/TextInput/TextInput';
import React from 'react';

const AccountDataTable = ({ accountDetails }: any) => {
    return (<div>Temp</div>
        // <form className="flex flex-col gap-4">
        //     {/* Name */}
        //     <div>
        //         <TextInput
        //             type="text"
        //             readOnly={true}
        //             value={accountDetails?.Name || ''}
        //         />
        //     </div>
        //     {/* BillingCountry */}
        //     <div>
        //         <TextInput
        //             id="BillingCountry"
        //             type="text"
        //             readOnly={true}
        //             value={accountDetails?.BillingCountry || ''}
        //         />
        //     </div>

        //     <div className="grid grid-cols-2 gap-8">
        //         {/* Phone */}
        //         <div>
        //             <TextInput
        //                 id="Phone"
        //                 type="text"
        //                 readOnly={true}
        //                 value={accountDetails?.Phone || ''}
        //             />
        //         </div>
        //         {/* Fax */}
        //         <div>
        //             <TextInput
        //                 id="Fax"
        //                 type="text"
        //                 readOnly={true}
        //                 value={accountDetails?.Fax || ''}
        //             />
        //         </div>
        //         {/* CreatedDate */}
        //         <div>
        //             <TextInput
        //                 id="CreatedDate"
        //                 type="text"
        //                 readOnly={true}
        //                 value={accountDetails?.CreatedDate || ''}
        //             />
        //         </div>
        //         {/* LastModifiedDate */}
        //         <div>
        //             <TextInput
        //                 id="LastModifiedDate"
        //                 type="text"
        //                 readOnly={true}
        //                 value={accountDetails?.LastModifiedDate || ''}
        //             />
        //         </div>
        //     </div>
        // </form>
    );
};

export default AccountDataTable;

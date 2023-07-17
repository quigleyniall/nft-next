import React from 'react';
import { CtxOrReq } from 'next-auth/client/_utils';
import {
    getProviders,
    signIn,
    getCsrfToken,
    getSession,
} from 'next-auth/react';
import { InferGetServerSidePropsType } from 'next';
import { Card } from '@mui/material';
import Image from 'next/image';

const providersIcons = {
    Salesforce: '/icons/salesforce-svgrepo-com.svg',
};

const SignIn = ({
    providers,
    csrfToken,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
        <>
            <div className="flex h-screen">
                <div className="m-auto">
                    <div className="max-w-md">
                        <Card>
                            <h5 className="mb-3 text-base font-semibold text-gray-900 dark:text-white lg:text-xl">
                                Connect to Salesforce
                            </h5>
                            <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                For this demo, we use Salesforce as the
                                provider. Click the salesforce button to get
                                authenticated.
                            </p>
                            <ul className="my-4 space-y-3">
                                {providers && csrfToken ? (
                                    Object.values(providers).map(
                                        (item: any, index) => {
                                            if (item.id !== 'email') {
                                                return (
                                                    <li
                                                        key={index}
                                                        onClick={() =>
                                                            signIn(item.id)
                                                        }>
                                                        <button className="w-full group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500">
                                                           Login
                                                            <span className="ml-3 whitespace-nowrap">
                                                                {item.name}
                                                            </span>
                                                        </button>
                                                    </li>
                                                );
                                            }
                                        }
                                    )
                                ) : (
                                    <p>No Available Providers</p>
                                )}
                            </ul>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignIn;

export const getServerSideProps = async (ctx: CtxOrReq | undefined) => {
    const providers = await getProviders();
    const csrfToken = await getCsrfToken(ctx);
    const session = await getSession(ctx);

    /**
     * If session is available then redirect to main page.
     */
    if (session) {
        return {
            redirect: { destination: '/', permanent: false },
        };
    }

    /**
     * Return providers and CSRF Token
     */
    return {
        props: { providers, csrfToken },
    };
};

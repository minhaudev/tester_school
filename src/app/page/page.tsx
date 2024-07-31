"use client";
import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import TooltipCustom from '@/components/atoms/Tooltip';
import Button from '@/components/atoms/Button';

export default function Page() {
    const [isRedirecting, setIsRedirecting] = useState(true); // State to manage redirection
    const searchParams = useSearchParams();
    const pageNumbers = searchParams.get("page");
    const router = useRouter();
    useEffect(() => {
        const validatePageNumber = async () => {
            if (pageNumbers) {
                const pageNumberNum = parseInt(pageNumbers, 10);
                if (isNaN(pageNumberNum) || pageNumberNum < 1 || pageNumberNum > 10) {
                    router.push('/404');
                } else {
                    setIsRedirecting(false);
                }
            } else {
                setIsRedirecting(false);
            }
        };
        validatePageNumber();
    }, [pageNumbers, router]);

    if (isRedirecting) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            This is page {pageNumbers}
            <TooltipCustom
                message="Hello world"
            >
                <Button>OKwe</Button>
            </TooltipCustom>
        </div>
    );
}

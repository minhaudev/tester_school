"use client";
import React, { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation';
export default function page() {
    const searchParams = useSearchParams()
    const pageNumbers = searchParams.get("page")
    const router = useRouter();

    useEffect(() => {
        if (pageNumbers) {
            let pageNumberNum = parseInt(pageNumbers)
            console.log(pageNumberNum)
            if (pageNumberNum > 100) {
                router.push('/404')
            }
        }


    }, []);


    return (
        <div>
            This is page {pageNumbers}
        </div>
    );
}

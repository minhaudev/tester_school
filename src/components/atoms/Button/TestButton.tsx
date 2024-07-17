"use client";
import React, {useState} from "react";
import Button from "./Button";

interface FileDetail {
    name: string;
    size: number;
}

export default function TestButton() {
    const [fileDetails, setFileDetails] = useState<FileDetail[]>([]);

    const handleDelete = (index: number) => {
        console.log(`Deleting file at index ${index}`);

        const newFileDetails = [...fileDetails];
        newFileDetails.splice(index, 1);
        setFileDetails(newFileDetails);
    };

    return (
        <div>
            <Button
                size="semi"
                variant="file"
                color="white"
                onDelete={handleDelete}
                fileDetails={fileDetails}
                setFileDetails={setFileDetails}>
                file
            </Button>
        </div>
    );
}

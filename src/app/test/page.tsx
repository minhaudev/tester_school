import Button from '@/components/atoms/Button'
import { Tooltip } from '@nextui-org/tooltip'
import React from 'react'

export default function page() {
    return (
        <div>
            <Tooltip
                content="hello world"
            >
                <div className='w-fit h-fit'>
                    <Button >Heofeksodfk</Button>
                </div>
            </Tooltip>
        </div>
    )
}

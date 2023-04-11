'use client'
import React from 'react'
import Button from './Button'
import { BsDownload } from 'react-icons/bs'
import Modal from './Modal'
import useColorStore from '@/global/useColorStore'

const ExportPaletta = () => {
    const { paletteColors } = useColorStore(state => state)
    return (
        <div>
            <Button>
                <BsDownload size={20} color="#696969" />
            </Button>
            <Modal>
                <div className='h-96 bg-white' style={{ width: 'calc(100vw / 6 * 3)' }}>asasdasd</div>
            </Modal>
        </div>
    )
}

export default ExportPaletta
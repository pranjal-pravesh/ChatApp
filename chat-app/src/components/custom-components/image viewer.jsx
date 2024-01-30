import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';

export default function ImageViewer(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleModalContentClick = (event) => {
        event.stopPropagation(); // Prevents click events from bubbling up to the overlay
    };

    return (
        <>
            <motion.img
                src={props.src}
                style={{
                    width: '90px',
                    aspectRatio: '1',
                    cursor: 'pointer',
                    opacity: isModalOpen ? '0.7' : '1',
                }}
                onClick={handleOpenModal}
            />

            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 1000,
                        }}
                        onClick={handleCloseModal}
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            style={{
                                position: 'relative',
                                maxWidth: '90%',
                                maxHeight: '90%',
                            }}
                            onClick={handleModalContentClick} // Stop propagation from modal content
                        >
                            <motion.img
                                src={props.src}
                                style={{ width: '100%', height: 'auto' }}
                            />
                            
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
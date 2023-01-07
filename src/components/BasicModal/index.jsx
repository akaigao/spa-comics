import { Modal } from '@mui/material'
import { BasicModalContainer } from './style'

export function BasicModal({ open, onClose }) {
  return (
    <Modal open={open} onClose={onClose}>
      <BasicModalContainer>
        <h1>Modal</h1>
      </BasicModalContainer>
    </Modal>
  )
}

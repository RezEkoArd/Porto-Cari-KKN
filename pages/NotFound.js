import React from 'react'
import { Button, Modal } from 'flowbite-react'

export default function NotFound(err) {


  return (
    <React.Fragment>
    <Button onClick={onClick}>
        Toggle modal
    </Button>
    <Modal
        show={false}
        size="md"
        popup={true}
        onClose={onClose}
    >
    <Modal.Header />
    <Modal.Body>
      <div className="text-center">
        <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
          Maaf Terdapat Kesalahan Teknis, Coba Ulangi Kembali!
        </h3>
        <p>{err}</p>
        <div className="flex justify-center gap-4">
          <Button
            color="failure"
            onClick={onClick}
          >
            Yes, I'm sure
          </Button>
        </div>
      </div>
    </Modal.Body>
  </Modal>
</React.Fragment>
  )
}

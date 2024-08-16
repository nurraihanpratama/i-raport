import toast from 'react-hot-toast'
import Swal from 'sweetalert2/dist/sweetalert2.js'

export const onSuccessFeedback = (response, callback, swal = false, msg = null) => {
  if (swal) {
    Swal.fire({
      icon: 'success',
      title: msg ? msg : response.props.flash,
      showConfirmButton: true,
    })
  } else {
    toast.success(msg ? msg : response.props.flash)
  }

  return callback
}

export const onErrorFeedback = (err, swal = false) => {
  let message
  // console.log(err)
  if (Object.keys(err) == 0) {
    message = err[0]
  } else {
    message = 'Terjadi kesalahan input, mohon diperbaiki'
  }

  if (swal) {
    return Swal.fire({
      icon: 'error',
      title: message,
      showConfirmButton: true,
    })
  } else {
    return toast.error(message)
  }
}

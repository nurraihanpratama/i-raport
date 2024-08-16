import StandardFormModalTemplate from '@/Theme/Components/ModalTemplates/StandardFormModalTemplate'
import { useForm } from '@inertiajs/react'
import { onErrorFeedback, onSuccessFeedback } from '@/Helpers/formFeedback'
import FormSelectInput from '@/Theme/Form/FormSelectInput'
import FormHeaderBody from '@/Theme/Form/FormHeaderBody'
import FormTextInput from '@/Theme/Form/FormTextInput'
import { userRole } from '@/Helpers/getRole'

export default function TeacherForm({ action, loadData, closeForm }) {
  const role = userRole().role

  const { Teacher, options } = loadData

  const { statuses } = options

  function getFormTitle() {
    if (action === 'create') return 'Form Tambah Teacher'
    if (action === 'update') return 'Update Teacher'
  }

  function getSubmitBtnLabel() {
    if (action === 'create') return 'Submit'
    if (action === 'update') return 'Update'
  }

  const form = useForm({
    __form_type: action,
    name: Teacher?.name ?? '',
    nip: Teacher?.nip ?? '',
    name: Teacher?.name ?? '',
  })

  const submit = (e) => {
    e.preventDefault()

    // return console.log(form.data)

    if (action === 'create') {
      if (confirm('Yakin untuk submit data baru?')) {
        return form.post(route('teacher.store', role), {
          preserveScroll: true,
          onSuccess: (response) => onSuccessFeedback(response, closeForm()),
          onError: onErrorFeedback,
        })
      }
    } else {
      if (confirm('Yakin untuk ' + action + ' data?')) {
        return form.put(route('teacher.' + action, [role, Teacher?.id]), {
          preserveScroll: true,
          onSuccess: (response) => onSuccessFeedback(response, closeForm()),
          onError: onErrorFeedback,
        })
      }
    }
  }

  const handleOnChange = (event) => {
    form.setData(event.target.name, event.target.value)
  }

  if (!form.wasSuccessful)
    return (
      <StandardFormModalTemplate
        title={getFormTitle()}
        closeForm={closeForm}
        processing={form.processing}
        submit={submit}
        submitBtnLabel={getSubmitBtnLabel()}
        headerBody={
          action !== 'create' && <FormHeaderBody label={`ID: ${Teacher?.Teacher_no}`} />
        }
      >
        <div className="block w-full space-y-4 text-gray-700 lg:w-96 dark:text-white">
          <div className='col'>

          <FormTextInput
            name="name"
            label="Nama Guru"
            value={form.data.name}
            onChange={handleOnChange}
            error={form.errors.name}
            />
          <FormTextInput
            name="title"
            label="Gelar Belakang"
            value={form.data.name}
            onChange={handleOnChange}
            error={form.errors.name}
            />
          <FormTextInput
            name="nip"
            label="NIP"
            value={form.data.name}
            onChange={handleOnChange}
            error={form.errors.name}
            />
            </div>
        </div>
      </StandardFormModalTemplate>
    )
}

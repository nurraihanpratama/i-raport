import StandardFormModalTemplate from '@/Theme/Components/ModalTemplates/StandardFormModalTemplate'
import FormTextInput from '@/Theme/Form/FormTextInput'
import { useForm } from '@inertiajs/react'
import { userRole } from '@/Helpers/getRole'

import { onErrorFeedback, onSuccessFeedback } from '@/Helpers/formFeedback'
import FormSelectInput from '@/Theme/Form/FormSelectInput'
import FormHeaderBody from '@/Theme/Form/FormHeaderBody'
import FormNumberInput from '@/Theme/Form/FormNumberInput'

export default function TapelForm({ action, loadData, closeForm }) {
  const role = userRole().role

  const { Tapel, options } = loadData

  const { statuses } = options

  function getFormTitle() {
    if (action === 'create') return 'Form Tambah Tapel'
    if (action === 'update') return 'Update Tapel'
  }

  function getSubmitBtnLabel() {
    if (action === 'create') return 'Submit'
    if (action === 'update') return 'Update'
  }

  const form = useForm({
    __form_type: action,
    tahun_ajaran: Tapel?.tahun_ajaran ?? '',
    semester: Tapel?.semester ?? 1,
  })

  const submit = (e) => {
    e.preventDefault()

    // return console.log(form.data)

    if (action === 'create') {
      if (confirm('Yakin untuk submit data baru?')) {
        return form.post(route('tapel.store', team_slug), {
          preserveScroll: true,
          onSuccess: (response) => onSuccessFeedback(response, closeForm()),
          onError: onErrorFeedback,
        })
      }
    } else {
      if (confirm('Yakin untuk ' + action + ' data?')) {
        return form.put(route('tapel.' + action, [team_slug, Tapel?.id]), {
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
          action !== 'create' && <FormHeaderBody label={`ID: ${Tapel?.tahun_ajaran}`} />
        }
      >
        <div className="block w-full space-y-4 text-gray-700 lg:w-96 dark:text-white">
          <FormTextInput
            name="tahun_ajaran"
            label="Tahun Ajaran"
            value={form.data.tahun_ajaran}
            onChange={handleOnChange}
            error={form.errors.tahun_ajaran}
          />
          <FormNumberInput
            name="semester"
            label="Semester"
            min={1}
            max={2}
            value={form.data.semester}
            onChange={handleOnChange}
            error={form.errors.semester}
          />
        </div>
      </StandardFormModalTemplate>
    )
}

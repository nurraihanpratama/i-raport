import ThemeLayout from '@/Theme/ThemeLayout'
import { Fragment, useState } from 'react'
import { usePage } from '@inertiajs/react'
import ContentCard from '@/Theme/Components/ContentCard'
import axios from 'axios'
import { fetchErrorCatch } from '@/Helpers/helper'
import TeacherDataTable from './Components/DataTable/TeacherDataTable'
import TeacherForm from './Components/Form/TeacherForm'
import Modal from '@/Theme/Components/Modal'
import ProcessingLoader from '@/Theme/Components/ProcessingLoader'

export default function Index() {
  const { page, collection, auth } = usePage().props
  const title = page.title

  const [processing, setProcessing] = useState(false)
  const [loadData, setLoadData] = useState(null)
  const [showCreateForm, setShowCreateForm] = useState(false)

  function onClickNew() {
    setProcessing(true)

    const url = route('teacher.create', auth.user.role)

    axios
      .get(url)
      .then((response) => {
        setLoadData(response.data)
        setProcessing(false)
        setShowCreateForm(true)
      })
      .catch((error) => fetchErrorCatch(error, setProcessing(false)))
  }

  return (
    <ThemeLayout title={title}>
      <ContentCard title={title} />

      <TeacherDataTable collection={collection} onClickNew={onClickNew} withNewButton />

      <Fragment>
        <Modal visible={processing} setVisible={setProcessing} noescape>
          <ProcessingLoader visible={processing} />
        </Modal>
       
        <Modal visible={showCreateForm} setVisible={setShowCreateForm} noescape>
          <TeacherForm
            action="create"
            loadData={loadData}
            closeForm={() => setShowCreateForm(false)}
          />
        </Modal>
      </Fragment>
    </ThemeLayout>
  )
}

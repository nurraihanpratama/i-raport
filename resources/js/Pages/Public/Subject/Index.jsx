import ThemeLayout from '@/Theme/ThemeLayout'
import Modal from '@/Theme/Components/Modal'
import { Fragment, useState } from 'react'
import { usePage } from '@inertiajs/react'
import ContentCard from '@/Theme/Components/ContentCard'
import ProcessingLoader from '@/Theme/Components/ProcessingLoader'
import axios from 'axios'
import { fetchErrorCatch } from '@/Helpers/helper'
import SubjectDataTable from './Components/DataTable/SubjectDataTable'
import SubjectForm from './Components/Form/SubjectForm'

export default function Index() {
  const { page, collection, auth } = usePage().props
  const title = page.title

  const [processing, setProcessing] = useState(false)
  const [loadData, setLoadData] = useState(null)
  const [showCreateForm, setShowCreateForm] = useState(false)

  function onClickNew() {
    setProcessing(true)

    const url = route('subject.create', auth.user.role)

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

      <SubjectDataTable collection={collection} onClickNew={onClickNew} withNewButton />

      <Fragment>
        <Modal visible={processing} setVisible={setProcessing} noescape>
          <ProcessingLoader visible={processing} />
        </Modal>

        <Modal visible={showCreateForm} setVisible={setShowCreateForm} noescape>
          <SubjectForm
            action="create"
            loadData={loadData}
            closeForm={() => setShowCreateForm(false)}
          />
        </Modal>
      </Fragment>
    </ThemeLayout>
  )
}

import { useEffect, useState } from "react"
import { Container, Row, Modal, Button } from "react-bootstrap"
import coastersService from "../../services/coasters.services"
import CoastersList from "../../components/CoastersList/CoastersList"
import NewCoasterForm from "../../components/NewCoasterForm/NewCoasterForm"
import Loader from "../../components/Loader/Loader"

const CoastersListPage = () => {

    const [coasters, setCoasters] = useState()
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        loadCoasters()
    }, [])

    const loadCoasters = () => {
        coastersService
            .getCoasters()
            .then(({ data }) => setCoasters(data))
            .catch(err => console.log(err))
    }

    return (
        <Container>

            <h1>Galería de montañas rusas</h1>

            <Button variant="dark" size="sm" onClick={() => setShowModal(true)}>Crear nueva</Button>

            <hr />
            <Row>
                {
                    !coasters
                        ?
                        <Loader />
                        :
                        <CoastersList coasters={coasters} />
                }
            </Row>



            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Nueva montaña rusa</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NewCoasterForm closeModal={() => setShowModal(false)} updateList={loadCoasters} />
                </Modal.Body>
            </Modal>


        </Container>
    )
}

export default CoastersListPage
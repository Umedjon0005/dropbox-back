const Router = require('express')
const router = new Router()
const authMiddleware = require('../middleware/auth.middleware')
const fileController = require('../controllers/fileController')

router.post('', authMiddleware, fileController.crFolder)
router.post('/upload', authMiddleware, fileController.pubFile)
router.get('', authMiddleware, fileController.gFiles)
router.get('/download', authMiddleware, fileController.dowFile)
router.delete('/', authMiddleware, fileController.remFile)


module.exports = router

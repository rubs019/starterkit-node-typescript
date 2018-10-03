import express from 'express'

class App {
	public express: express.Application

	constructor() {
		this.express = express()
		this.mountRoutes()
	}

	private mountRoutes(): void {
		const router = express.Router()

		// GET
		router.get('/', (req: express.Request, res: express.Response) => {
			res.json({
				message: 'Is on : Ruben'
			})
		})

		this.express.use('/', router)
	}
}

export default new App().express

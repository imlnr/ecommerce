const express = require('express');
const axios = require('axios');
const linkedinRouter = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     LinkedInToken:
 *       type: object
 *       properties:
 *         code:
 *           type: string
 *       required:
 *         - code
 */

/**
 * @swagger
 * tags:
 *   name: LinkedIn
 *   description: LinkedIn authentication related operations
 */

/**
 * @swagger
 * /linkedin/token:
 *   post:
 *     summary: Retrieve LinkedIn access token
 *     tags: [LinkedIn]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LinkedInToken'
 *     responses:
 *       '200':
 *         description: LinkedIn access token retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 access_token:
 *                   type: string
 *                 expires_in:
 *                   type: integer
 *       '500':
 *         description: Failed to fetch token
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */

linkedinRouter.post('/token', async (req, res) => {
    const { code, uri } = req.body;
    try {
        const response = await axios.post(
            `https://www.linkedin.com/oauth/v2/accessToken`,
            null,
            {
                params: {
                    grant_type: 'authorization_code',
                    code: code,
                    redirect_uri: uri,
                    client_id: process.env.LINKEDIN_CLIENT_ID,
                    client_secret: process.env.LINKEDIN_CLIENT_SECRET,
                },
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            }
        );
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch token' });
    }
});

module.exports = {
    linkedinRouter
};

/**
 * @swagger
 * /api/product:
 *   post:
 *     summary: Agregar un nuevo producto
 *     description: Crea un producto con nombre y precio.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Laptop"
 *               price:
 *                 type: number
 *                 example: 1000
 *     responses:
 *       201:
 *         description: Producto agregado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 product:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                     price:
 *                       type: number
 *       400:
 *         description: Faltan datos obligatorios
 *       500:
 *         description: Error interno del servidor
 */
export async function POST(req) {
  try {
    const body = await req.json();
    
    if (!body.name || !body.price) {
      return Response.json({ message: "Nombre y precio son requeridos" }, { status: 400 });
    }

    return Response.json({ message: "Producto agregado", product: body }, { status: 201 });
  } catch (error) {
    return Response.json({ message: "Error en la solicitud" }, { status: 500 });
  }
}

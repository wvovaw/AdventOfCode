import { Matrix, Vector } from './types.ts'

function _reverseVector<T>(vector: Vector<T>): Vector<T> {
  return vector.toReversed()
}
function _swapMatrixCols<T>(matrix: Matrix<T>): Matrix<T> {
  return matrix.map((r) => r.toReversed())
}
function _transposeMatrix<T>(matrix: Matrix<T>): Matrix<T> {
  return matrix[0].map((_, colIndex) => matrix.map((row) => row[colIndex]))
}
function _horizontalTraverse<T>(matrix: Matrix<T>): Vector<T> {
  return matrix.flat()
}
function _veritcalTraverse<T>(matrix: Matrix<T>): Vector<T> {
  return matrix[0].map((_, colIndex) =>
    matrix.reduce((acc, row) => [...acc, row[colIndex]], [] as T[])
  ).flat()
}
function _diagonalTraverse<T>(matrix: Matrix<T>): Vector<T> {
  if (matrix.length === 1) return matrix.flat()
  const MAX_SIZE = matrix[0].length

  const v = new Array<Vector<T>>()

  for (let i = 0; i < 2 * MAX_SIZE - 1; i++) {
    v.push([])
  }

  for (let i = 0; i < matrix[0].length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      v[i + j].push(matrix[i][j])
    }
  }

  const vec = []
  for (let i = 0; i < v.length; i++) {
    for (let j = v[i].length - 1; j >= 0; j--) {
      vec.push(v[i][j])
    }
  }
  return vec
}

interface Strategy<T> {
  traverse: (matrix: Matrix<T>) => Vector<T>
}

type MatrixToVectorOptions = {
  direction:
    | 'ltr-down'
    | 'ltr-up'
    | 'rtl-down'
    | 'rtl-up'
    | 'ttb-left'
    | 'ttb-right'
    | 'btt-left'
    | 'btt-right'
    | 'tl-br-upward'
    | 'tl-br-downward'
    | 'br-tl-upward'
    | 'br-tl-downward'
    | 'tr-bl-upward'
    | 'tr-bl-downward'
    | 'bl-tr-upward'
    | 'bl-tr-downward'
}

export function matrixToVector<T>(
  matrix: Matrix<T>,
  { direction = 'ltr-down' }: MatrixToVectorOptions,
): Vector<T> {
  switch (direction) {
    case 'ltr-down':
      return _horizontalTraverse(matrix)
    case 'ltr-up':
      return _horizontalTraverse(_reverseVector(matrix))
    case 'rtl-down':
      return _horizontalTraverse(_swapMatrixCols(matrix))
    case 'rtl-up':
      return _reverseVector(_horizontalTraverse(matrix))
    case 'ttb-right':
      return _horizontalTraverse(_transposeMatrix(matrix))
    case 'ttb-left':
      return _horizontalTraverse(_transposeMatrix(_swapMatrixCols(matrix)))
    case 'btt-right':
      return _horizontalTraverse(_swapMatrixCols(_transposeMatrix(matrix)))
    case 'btt-left':
      return _reverseVector(_horizontalTraverse(_transposeMatrix(matrix)))
    case 'tl-br-upward':
      return _diagonalTraverse(matrix)
    case 'tl-br-downward':
      return _diagonalTraverse(_transposeMatrix(matrix))
    case 'bl-tr-upward':
      return _diagonalTraverse(_swapMatrixCols(_transposeMatrix(matrix)))
    case 'bl-tr-downward':
      return _diagonalTraverse(_reverseVector(matrix))
    case 'tr-bl-upward':
      return _diagonalTraverse(_swapMatrixCols(matrix))
    case 'tr-bl-downward':
      return _diagonalTraverse(_transposeMatrix(_swapMatrixCols(matrix)))
    case 'br-tl-upward':
      return _reverseVector(_diagonalTraverse(_transposeMatrix(matrix)))
    case 'br-tl-downward':
      return _reverseVector(_diagonalTraverse(matrix))
    default:
      throw new Error(`Unsupported direction: ${direction}`)
  }
}

export * from './types.ts'

<?php

namespace App\Http\Controllers;

class ApiController extends Controller
{
    /**
     * @param array $data
     * @param $status
     * @param $response_code
     */
    protected function buildResponse(array $data, $status, $response_code, $errors = null)
    {
        return response()->json([
            'status' => $status,
            'errors' => $errors,
            'data'   => $data
        ], $response_code);
    }

    /**
     * @param $data
     * @param int $response_code
     */
    protected function errorResponse($data, $errors, $response_code = 404)
    {
        return $this->buildResponse($data, 'error', $response_code, $errors);
    }

    /**
     * @param $data
     * @param int $response_code
     */
    protected function successResponse($data, $response_code = 200)
    {
        return $this->buildResponse($data, 'success', $response_code);
    }
}

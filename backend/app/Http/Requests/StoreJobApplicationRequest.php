<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreJobApplicationRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            // Honeypot: a real user never fills this hidden field in.
            'website' => ['prohibited'],

            'position' => ['nullable', 'string', 'exists:job_listings,slug'],
            'surname' => ['required', 'string', 'max:255'],
            'firstName' => ['required', 'string', 'max:255'],
            'middleName' => ['nullable', 'string', 'max:255'],
            'birthday' => ['nullable', 'date'],
            'sex' => ['nullable', 'string', 'in:male,female,other'],
            'contactNumber' => ['required', 'string', 'max:50'],
            'email' => ['required', 'email', 'max:255'],
            'address' => ['nullable', 'string', 'max:255'],
            'coverStatement' => ['nullable', 'string'],
            'resume' => ['required', 'file', 'max:5120', 'mimes:pdf,doc,docx'],
        ];
    }

    public function messages(): array
    {
        return [
            'website.prohibited' => 'Submission rejected.',
        ];
    }
}

import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, X } from 'lucide-react';

interface SectorFormData {
  name: string;
  description: string;
  expectedTraffic: string;
  contacts: { name: string; email: string; role: string }[];
}

export function SectorForm() {
  const [formData, setFormData] = useState<SectorFormData>({
    name: '',
    description: '',
    expectedTraffic: '',
    contacts: [{ name: '', email: '', role: '' }],
  });
  const [jsonFile, setJsonFile] = useState<File | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setJsonFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'application/json': ['.json'] },
    maxFiles: 1,
  });

  const addContact = () => {
    setFormData((prev) => ({
      ...prev,
      contacts: [...prev.contacts, { name: '', email: '', role: '' }],
    }));
  };

  const removeContact = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      contacts: prev.contacts.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ formData, jsonFile });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Sector Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            value={formData.description}
            onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
            rows={3}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="traffic" className="block text-sm font-medium text-gray-700">
            Expected Traffic
          </label>
          <select
            id="traffic"
            value={formData.expectedTraffic}
            onChange={(e) => setFormData((prev) => ({ ...prev, expectedTraffic: e.target.value }))}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          >
            <option value="">Select expected traffic</option>
            <option value="low">Low (0-50 requests/day)</option>
            <option value="medium">Medium (51-200 requests/day)</option>
            <option value="high">High (201+ requests/day)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Process Model (JSON)</label>
          <div
            {...getRootProps()}
            className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 py-10 hover:border-gray-400"
          >
            <input {...getInputProps()} />
            <div className="text-center">
              {jsonFile ? (
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">{jsonFile.name}</span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setJsonFile(null);
                    }}
                    className="rounded p-1 hover:bg-gray-100"
                  >
                    <X className="h-4 w-4 text-gray-500" />
                  </button>
                </div>
              ) : (
                <div className="space-y-2">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="text-sm text-gray-600">
                    {isDragActive ? (
                      <p>Drop the JSON file here</p>
                    ) : (
                      <p>
                        Drag and drop your JSON file here, or{' '}
                        <span className="text-blue-600">browse</span>
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label className="block text-sm font-medium text-gray-700">Sector Contacts</label>
            <button
              type="button"
              onClick={addContact}
              className="text-sm text-blue-600 hover:text-blue-500"
            >
              Add Contact
            </button>
          </div>
          <div className="mt-2 space-y-4">
            {formData.contacts.map((contact, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-1 space-y-4">
                  <input
                    type="text"
                    placeholder="Name"
                    value={contact.name}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        contacts: prev.contacts.map((c, i) =>
                          i === index ? { ...c, name: e.target.value } : c
                        ),
                      }))
                    }
                    className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={contact.email}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        contacts: prev.contacts.map((c, i) =>
                          i === index ? { ...c, email: e.target.value } : c
                        ),
                      }))
                    }
                    className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Role"
                    value={contact.role}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        contacts: prev.contacts.map((c, i) =>
                          i === index ? { ...c, role: e.target.value } : c
                        ),
                      }))
                    }
                    className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => removeContact(index)}
                    className="mt-2 rounded p-1 hover:bg-gray-100"
                  >
                    <X className="h-5 w-5 text-gray-500" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Create Sector
        </button>
      </div>
    </form>
  );
}
import React, {useEffect, useState} from 'react';
import './survey.scss';
import {API_URL} from "../../config";
import {fetchData} from "../../utils/api";

/**
 TODO refactor code below, create child components for the form, refactor methods, move ALL interfaces into separate files
 *
 */
class UserData {
    name: string;
    number: string;
    email: string;
    favoriteBrand: string;
    rating: number;

    constructor(data: UserData) {
        this.name = data.name;
        this.number = data.number;
        this.email = data.email;
        this.favoriteBrand = data.favoriteBrand;
        this.rating = data.rating;
    }
}

function Survey() {
    const emptyFormData = new UserData({
        name: '',
        number: '',
        email: '',
        favoriteBrand: '',
        rating: 0,
    })
    const [formData, setFormData] = useState(emptyFormData);
    const [tableData, setTableData] = useState([]);

    const [errors, setErrors] = useState({
        name: '',
        number: '',
        email: '',
        favoriteBrand: '',
    });
    const brandOptions = [
        'BBC',
        'Distell',
        'Engen',
        'Liquid Telecom',
        'Microsoft',
        'MultiChoice',
        'Pick n Pay (PnP)',
        'Nike',
        'Sanlam',
        'Santam',
        'Spotify',
        'TFG (The Foschini Group)',
        'Tyme Bank',
        'Visa',
        'Wesgro',
    ];
    useEffect(() => {
        retrieveData().then(() => console.log('user data fetched'));
    }, []);

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};

        if (!formData.favoriteBrand.trim()) {
            newErrors.favoriteBrand = 'Favourite Brand is required';
        }

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.number.trim()) {
            newErrors.number = 'Number is required';
        } else if (!/^\d+$/.test(formData.number.trim())) {
            newErrors.number = 'Number must be numeric';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email.trim())
        ) {
            newErrors.email = 'Invalid email address';
        }

        setErrors(newErrors as any);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const isValid = validateForm();

        if (isValid) {
            await saveData(new UserData(formData));
            await setFormData(emptyFormData);
            await retrieveData();
            console.log('form data submitted:', formData);
        } else {
            console.log('form data contains errors. Please fix them.');
        }
    };
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleBrandChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFormData({
            ...formData,
            favoriteBrand: e.target.value,
        });
    };
    const handleRatingChange = (clickedRating: any) => {
        setFormData({
            ...formData,
            rating: clickedRating,
        });
        console.log(`You've rated this product: ${clickedRating} stars`);
    };

    const saveData = async (data: UserData) => {
        await fetchData(API_URL('api/user-rating'), {
            body: JSON.stringify(data),
            method: 'POST'
        });
    }

    const retrieveData = async () => {
        const data = await fetchData(API_URL('api/user-rating'), {
            method: 'GET'
        });
        setTableData(data);
    }

    return (
        <div className="contact-form-component container px-5 mt-5">
            <div className="px-5  pb-5">
                <div className="title mb-4">
                    <h3 className="subtitle">Favorite Brand Survey</h3>
                </div>

                <div className="d-flex justify-content-between mt-3 gap-4">
                    <div className="w-100">
                        <h2 className="heading">Tell us about your favourite Brand</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="favoriteBrand" className="form-label">
                                    Favorite Brand: *
                                </label>
                                <select
                                    id="favoriteBrand"
                                    name="favoriteBrand"
                                    className={`form-select form-control ${errors.favoriteBrand && 'is-invalid'}`}
                                    value={formData.favoriteBrand}
                                    onChange={handleBrandChange}
                                >
                                    <option value="" disabled>
                                        Select a brand
                                    </option>
                                    {brandOptions.map((brand) => (
                                        <option key={brand} value={brand}>
                                            {brand}
                                        </option>
                                    ))}
                                </select>
                                {errors.favoriteBrand && (
                                    <div className="invalid-feedback">{errors.favoriteBrand}</div>
                                )}
                            </div>
                            <div className="star-rating mb-3 mt-3">
                                <label className="form-label mb-0">
                                    Rating:
                                </label>
                                <div>
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <span
                                            key={star}
                                            className={`star ${star <= formData.rating ? 'selected' : ''}`}
                                            onClick={() => handleRatingChange(star)}
                                        >&#9733;
                                </span>
                                    ))}
                                </div>

                            </div>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">
                                    Name: *
                                </label>
                                <input
                                    type="text"
                                    className={`form-control ${errors.name && 'is-invalid'}`}
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                                {errors.name && (
                                    <div className="invalid-feedback">{errors.name}</div>
                                )}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="number" className="form-label">
                                    Number: *
                                </label>
                                <input
                                    type="text"
                                    className={`form-control ${errors.number && 'is-invalid'}`}
                                    id="number"
                                    name="number"
                                    value={formData.number}
                                    onChange={handleInputChange}
                                />
                                {errors.number && (
                                    <div className="invalid-feedback">{errors.number}</div>
                                )}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Email: *
                                </label>
                                <input
                                    type="text"
                                    className={`form-control ${errors.email && 'is-invalid'}`}
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                                {errors.email && (
                                    <div className="invalid-feedback">{errors.email}</div>
                                )}
                            </div>

                            <button type="submit" className="btn btn-primary mt-4">
                                Submit
                            </button>
                        </form>
                    </div>
                    <div className="w-100">
                        <div className="submitted-survey-table">
                            <h2 className="heading">Submitted Survey Data</h2>
                            <table className="table table-bordered">
                                <thead>
                                <tr>
                                    <th>Brand</th>
                                    <th>Rating</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone Number</th>
                                </tr>
                                </thead>
                                <tbody>
                                {tableData.map((data: UserData, index) => (
                                    <tr key={index}>
                                        <td>{data.favoriteBrand}</td>

                                        <td>
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <span
                                                    key={star}
                                                    className={`star ${star <= data.rating ? 'selected' : ''}`}
                                                    onClick={() => handleRatingChange(star)}
                                                >&#9733;
                                                    </span>
                                            ))}
                                        </td>
                                        <td>{data.name}</td>
                                        <td>{data.email}</td>
                                        <td>{data.number}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Survey;

import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-dark text-center text-white">
            <div className="container p-4">
                <section className="mb-4">
                    <Link to="#" className="btn btn-outline-light btn-floating m-1" role="button">
                        <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link to="#" className="btn btn-outline-light btn-floating m-1" role="button">
                        <i className="fab fa-twitter"></i>
                    </Link>
                    <Link to="#" className="btn btn-outline-light btn-floating m-1" role="button">
                        <i className="fab fa-google"></i>
                    </Link>
                    <Link to="#" className="btn btn-outline-light btn-floating m-1" role="button">
                        <i className="fab fa-instagram"></i>
                    </Link>
                    <Link to="#" className="btn btn-outline-light btn-floating m-1" role="button">
                        <i className="fab fa-linkedin-in"></i>
                    </Link>
                    <Link to="#" className="btn btn-outline-light btn-floating m-1" role="button">
                        <i className="fab fa-github"></i>
                    </Link>
                </section>

                <section>
                    <form action="#">
                        <div className="row d-flex justify-content-center">
                            <div className="col-auto">
                                <p className="pt-2">
                                    <strong>Sign up for our newsletter</strong>
                                </p>
                            </div>
                            <div className="col-md-5 col-12">
                                <div className="form-outline form-white mb-4">
                                    <input type="email" id="form5Example21" className="form-control" />
                                    <label className="form-label" for="form5Example21">Email address</label>
                                </div>
                            </div>
                        </div>
                    </form>
                </section>

                <section>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Links</h5>
                            <ul className="list-unstyled mb-0">
                                <li>
                                    <Link to="#" className="text-white">Link 1</Link>
                                </li>
                                <li>
                                    <Link to="#" className="text-white">Link 2</Link>
                                </li>
                                <li>
                                    <Link to="#" className="text-white">Link 3</Link>
                                </li>
                                <li>
                                    <Link to="#" className="text-white">Link 4</Link>
                                </li>
                            </ul>
                        </div>

                        {/* Repeat the above code for other columns as needed */}
                    </div>
                </section>
            </div>
        </footer>
    );
}

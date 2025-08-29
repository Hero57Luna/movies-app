import React from 'react';
import RegiesterForm from '../components/Fragments/RegiesterForm';
import AuthLayouts from '../components/Layouts/AuthLayouts';
import { Link } from "react-router-dom";

function App() {
  return (
    <AuthLayouts title="Regiester">
        <RegiesterForm></RegiesterForm>
        <p className="text-sm mt-5 justify-center flex">
            Already have an account?
            <Link to="/login" className="font-bold ml-1"> Login</Link>
        </p>
    </AuthLayouts>
  );
}

export default App;
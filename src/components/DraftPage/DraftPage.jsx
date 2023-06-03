import * as React from 'react';
import DraftGuideList from './DraftGuideList/DraftGuideList';
import DraftGuideTitle from './DraftGuideTitle/DraftGuideTitle';

export default function DraftPage() {
    
    return (
        <div>
            <DraftGuideTitle/>
            <DraftGuideList/>
        </div>
    );
}
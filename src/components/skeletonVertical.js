import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import React from "react";

const SkeletonVertecol = () => {
    return (
        <div>
            <Skeleton width='40%' style={{marginRight:'.3rem'}} inline height='130px'   />
            <Skeleton width='58%' height='130px'  />
            <Skeleton
                style={{ margin: '0.5rem' }}
                circle
                height={40}
                width={40}
                inline
            />
            <Skeleton height={20} width='75%'   />
        </div>
    )
}
export default SkeletonVertecol
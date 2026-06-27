import {Icon} from '../../Icon';

const FeatureList = ({product}) => {

    return (
        <div className="border-t border-slate-200 pt-6">
            <ul className="space-y-3 text-sm text-slate-600">
                {product?.featureList?.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                        <Icon
                            className="w-5 h-5 text-green-500"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M5 13l4 4L19 7"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                            />
                        </Icon>
                        {feature}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FeatureList;
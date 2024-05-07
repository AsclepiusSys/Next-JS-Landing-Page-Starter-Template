import className from 'classnames';
import { useRouter } from 'next/router';

type IVerticalFeatureRowProps = {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    reverse?: boolean;
    align?: 'left' | 'center' | 'right';  // New alignment prop
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
    const verticalFeatureClass = className(
        'mt-20',
        'flex',
        'flex-wrap',
        'items-center',
        'justify-start',  // This ensures content starts from the left
        {
            'flex-row-reverse': props.reverse,
        },
    );

    const contentAlignmentClass = className({
        'text-left': props.align === 'left' || !props.align,  // Default to left if not specified
        'text-center': props.align === 'center',
        'text-right': props.align === 'right',
    });

    const router = useRouter();

    return (
        <div className={verticalFeatureClass}>
            <div className={`w-full sm:w-1/2 sm:px-6 ${contentAlignmentClass}`}>
                <h3 className="text-3xl font-semibold text-gray-900">{props.title}</h3>
                <div className="mt-6 text-xl leading-9">{props.description}</div>
            </div>

            <div className="w-full p-6 sm:w-1/2">
                <img src={`${router.basePath}${props.image}`} alt={props.imageAlt} />
            </div>
        </div>
    );
};

export { VerticalFeatureRow };

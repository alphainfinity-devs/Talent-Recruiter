import Card from '@material-tailwind/react/components/Card';
import CardHeader from '@material-tailwind/react/components/Card/CardHeader';
import CardStatusFooter from '@material-tailwind/react/components/Card/CardFooter';
import Icon from '@material-tailwind/react/components/IconButton';

export default function StatusCard({
    color,
    icon,
    title,
    amount,
    percentage,
    percentageColor,
    percentageIcon,
    date,
}) {
    return (
        <div className="px-4 mb-10">
            <Card>
              
                    <CardHeader color={color} iconOnly className="mb-0">
                        <Icon name={icon} size="3xl" color="white" />
                    </CardHeader>

                    {/* <CardStatus title={title} amount={amount} /> */}
            

                <CardStatusFooter
                    amount={percentage}
                    color={percentageColor}
                    date={date}
                >
                    <Icon color={percentageColor} name={percentageIcon} />
                </CardStatusFooter>
            </Card>
        </div>
    );
}

// @flow
import {Component} from "react";
import styles from "./Reviews.css";
import classnames from "classnames";

type IReview = {
    image: string;
    name: string;
    text: string;
}

const reviews: IReview[] = [
    {
        image: require("./images/1.jpg"),
        name: "Оксана Доронина",
        text: "Ребята, спасибо вам за проделанную работу!!!! Вы просто супер-команда!!!! Отличный человеческий подход, за адекватные деньги, качественный результат и в срок (что не мало важно!!!) !!!! С вами работать было одно удовольствие!!!! Надеюсь, впереди еще много совместных проектов!!!! Как организатор, я всегда особое внимание уделяю мелочам (как одеты, как общаются, как снимают, кто снимает, на сколько камер, какие, в срок ли, качество и т.д.) и требования, как правило, к подрядчикам всегда завышенные, дабы соответствовать уровню клиента... И могу вас заверить, ребята делают свое дело качественно!!!! Всем рекомендую!!! на свадьбу, и на дни рождения, и на корпоративы, концерты - на любые мероприятия!"
    },
    {
        image: require("./images/2.jpg"),
        name: "Анастасия Шкурова",
        text: "Артем и Ульяна спасибо вам за наше первое совместное сотрудничество и за результат, которым довольны наши клиенты. Придумывая концепцию мероприятия и создавая сценарий, у меня в голове уже был итоговый ролик, который должен был передать все эмоции и сюжет нашего мероприятия. Спасибо Вам за то, что вы умете слушать и слышать! За Ваш профессионализм! И за умение работать в команде! Результат вашей работы - это 100% попадание в ожидания нашего клиента и красивая точка в реализации проекта! Спасибо!"
    },
    {
        image: require("./images/3.jpg"),
        name: "Василий и Юлиана Шевкуновы",
        text: "Артём и Ульяна! Я Вас люблю  Так прекрасно, когда видеографы не просто выполняют свою работу, а становятся частью праздника, частью свадьбы! Вы такие потрясающие Я в восторге от того, как вы слаженно работаете, как понимаете друг друга с полуслова, с полувзгляда, как у вас резко приходит озарение, и уже через секунду мы готовы воплотить ваши идеи Я счастлива работать с Вами! И просто знать Вас Вася присоединяется к моим словам Ещё тогда, когда мы только выбрали вас, я уже была уверена, что вы свои люди  На любой вопрос, который возникал у меня, Артем сразу отвечал, все-все детали мне разъяснял и мне сразу становилось спокойно Нам даже не нужно ждать результата, чтобы сказать, что Вы большие молодцы! Ну и самое главное - Ваши видео  Это качество, стиль и вкус! Именно поэтому я вас изначально и выбрала. Я даже не желаю, а знаю, что вы будете процветать Я могу очень долго и очень много про Вас говорить! Спасибо ВАМ"
    },
    {
        image: require("./images/4.jpg"),
        name: "Ольга и Евгений Чертищевы",
        text: "Ульяна и Артем спасибо вам за вашу изумительную работу,за такую красоту. Вы профессионалы,знаете свое дело. За качество и быструю работу раньше срока. Вы хорошие и позитивные ребята. Удачи вам,по больше хороших работ!"
    },
    {
        image: require("./images/5.jpg"),
        name: "Иван и Аня Ергуновы",
        text: "Ульяна! мы с Ваней тоже хотим сказать большое человеческое СПАСИБО тебе! За терпение, за абааалденный результат и за слёзы счастья на глазах! У тебя получилось в видео сохранить волшебство, которое есть в жизни. Это дорогого стоит Спасибо! Пусть у вас не теряется огонёк и желание делать маленькие и большие фильмы про любовь! Удачи и счастья вам!"
    },
    {
        image: require("./images/6.jpg"),
        name: "Наталия Брылина",
        text: "Артём - мастер своего дела! спасибо за чуткий подход к своей работе, даже в столь непривычной для Вас сфере! За внимательность, терпимость к нам. Очень рады, что нашли настоящего профессионала своего дела! Желаем дальнейших творческих успехов и процветания! Надеемся на дальнейшее сотрудничество."
    },
    {
        image: require("./images/7.jpg"),
        name: "Константин и Марина Тюш",
        text: "Хочу выразить огромную благодарность Ульяне и Артему!!! Видео с нашей свадьбы получилось просто загляденье!!))) мы с мужем пересматривали видео не один десяток раз наверно и хочется смотреть еще и еще!! качество супер!!! очень довольны результатом))"
    },
    {
        image: require("./images/8.jpg"),
        name: "Катерина и Влад Федотовы",
        text: "День создания моей семьи, запечатлели именно Артём и Ульяна! Безумно счастлива что получила такой результат их труда, а именно было очень не понятно почему гости не видели аж 2х  видеооператора,я уверена-это и есть профессионализм, то за что я влюбилась в супер команду, я не думала что можно было забраться с техникой на крышу 12этажного дома ради пары кадров, не думала что можно так невероятно создать фильм , который поразит и притянет всех в моей семье. Спасибо не устаю говорить, скорость создания фильма так же оказалась невероятной, да и количество минут ...это то что было для меня было очень очень важно, меня смогла услышать эта потрясающая команда! Я знаю точно что все самые Важные семейные торжества вы не бросите нас и продолжите работу с Нами)))"
    }
];

const ReviewText = ({review, width}) => <div className={styles.reviewWrapper} style={{width: width}}>
    <div className={styles.title}>{review.name}</div>
    <div className={styles.comment}>{review.text}</div>
</div>;

const ReviewTexts = ({reviews, activeIndex, width}) => <div className={styles.reviewsWrapper}>
    <div className={styles.reviewsContainer} style={{width: reviews.length * width, marginLeft: -width * activeIndex}}>
        {reviews.map((r, idx) => <ReviewText key={idx} review={r} width={width}/>)}
    </div>
</div>;

const getImage = (activeIndex, index) => {
    return reviews[activeIndex + index] == null
        ? reviews[reviews.length + index] == null ? reviews[0] : reviews[reviews.length + index]
        : reviews[activeIndex + index]
};

const ReviewAvatars = ({activeIndex, prev, next}) => {
    return <div className={styles.avatarWrapper}>
        <div className={classnames(styles.avatar, styles.prevAvatar)}
             onClick={prev}
             style={{backgroundImage: `url(${getImage(activeIndex, -1).image})`}}>
        </div>
        <div className={classnames(styles.avatar, styles.avatarActive)}
             style={{backgroundImage: `url(${getImage(activeIndex, 0).image})`}}>
        </div>
        <div className={classnames(styles.avatar, styles.nextAvatar)}
             onClick={next}
             style={{backgroundImage: `url(${getImage(activeIndex, 1).image})`}}
        >
        </div>
    </div>
};

type IState = {
    activeReviewIndex: number;
}

type IProps = {
    width: number;
    reviews: IReview[];
}

var initialPoint;
var finalPoint;

class Reviews extends Component {
    state: IState;
    props: IProps;
    timer: any;

    constructor(props: IProps) {
        super(props);
        this.state = {
            activeReviewIndex: 0,
            width: props.width
        }
    }

    componentDidMount() {
        //this.timer = setInterval(this.next, 15000);
        window.addEventListener("resize", this.fixWidth);
        const elem = this.refs["ReviewTexts"];

        elem.addEventListener("touchstart", this.touchstart, false);
        elem.addEventListener("touchend", this.touchend, false);
        this.fixWidth();
        this.loadImages();
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.fixWidth);
        clearInterval(this.timer);
    }

    render() {
        return (
            <div className={styles.root} style={{width: this.state.width}}>
                <div>
                    <button className={styles.prev} onClick={this.prev}></button>
                    <ReviewAvatars
                        activeIndex={this.state.activeReviewIndex}
                        prev={this.prev}
                        next={this.next}
                    />
                    <button className={styles.next} onClick={this.next}></button>
                </div>
                <div ref="ReviewTexts">
                    <ReviewTexts
                        reviews={reviews}
                        activeIndex={this.state.activeReviewIndex}
                        width={this.state.width}/>
                </div>
            </div>
        );
    }

    loadImages = () => {
        reviews.forEach(r => {
            const i = new Image();
            i.src = r.image;
        });
    };

    prev = () => {
        let activeReviewIndex = this.state.activeReviewIndex - 1;
        if (activeReviewIndex < 0) {
            activeReviewIndex = reviews.length - 1;
        }
        this.setState({
            activeReviewIndex
        });
    };

    next = () => {
        let activeReviewIndex = this.state.activeReviewIndex + 1;
        if (activeReviewIndex >= reviews.length) {
            activeReviewIndex = 0;
        }
        this.setState({
            activeReviewIndex
        });
    };

    fixWidth = () => {
        const width = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;
        if (width < 700) {
            this.setState({
                width: width - 50
            })
        } else if (this.state.width != 700) {
            this.setState({
                width: 700
            })
        }
    };


    touchstart = (event) => {
        initialPoint = event.changedTouches[0];
    };

    touchend = (event) => {
        finalPoint = event.changedTouches[0];
        const xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
        const yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
        if (xAbs > 20 || yAbs > 20) {
            if (xAbs > yAbs) {
                if (finalPoint.pageX < initialPoint.pageX) {
                    this.next();
                } else {
                    this.prev();
                }
            }
        }
    };
}

Reviews.propTypes = {
    reviews: React.PropTypes.array,
    width: React.PropTypes.number
};

Reviews.defaultProps = {
    reviews: [],
    width: 700
};

export default Reviews;

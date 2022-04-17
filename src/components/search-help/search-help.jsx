import "./search-help.scss";

import { connect } from "react-redux";

import { addFilm } from "../../redux/tytles/tytles.action";
import { openGoodNotif } from "../notif.component/notif";

const SearchHelp = ({ names, add }) => {
	const searchClick = (i) => {
		add(i);
		setTimeout(() => openGoodNotif("success"), 500);
	};
	return names.nameRu ? (
		<div className="search-help" onClick={() => searchClick(names)}>
			{names.nameRu}
		</div>
	) : null;
};

const mapDispatchToProps = (dispatch) => ({
	add: (i) => dispatch(addFilm(i)),
});

export default connect(null, mapDispatchToProps)(SearchHelp);

import React from "react"
import {Button, FormGroup, Input} from "reactstrap"
import { Menu, Search, Check, Info, Star, Trash } from "react-feather"
import PerfectScrollbar from "react-perfect-scrollbar"
import { connect } from "react-redux"
import {
    getTodos,
    completeTask,
    readTask,
    importantTask,
    trashTask,
    searchTask
} from "../../../redux/actions/todo/index"
import Checkbox from "../../../components/@vuexy/checkbox/CheckboxesVuexy"
import SweetAlert from "react-bootstrap-sweetalert";
import dateConvert from '../../../helpers/dateConvert';

class TaskList extends React.Component {
    static getDerivedStateFromProps(props, state) {
        if (props.app.todo.routeParam !== state.currentLocation) {
            return {
                todos: props.app.todo.todos
            }
        }
        // Return null if the state hasn't changed
        return null
    }
    state = {
        Alert: false,
        delete_id: null,
        todos: [],
        handleUpdateTask: null,
        currentLocation: this.props.routerProps.location.pathname,
        value: ""
    }
    async componentDidMount() {
        await this.props.getTodos(this.props.routerProps.match.params)
        this.setState({
            todos: this.props.app.todo.todos,
            handleUpdateTask: this.props.handleUpdateTask
        })
    }

    handleOnChange = e => {
        this.setState({ value: e.target.value })
        this.props.searchTask(e.target.value)
    }

    render() {
        const { todos, handleUpdateTask, value } = this.state
        let routerFilter = this.props.routerProps.match.params.filter
        let todosArr = value.length ? this.props.app.todo.filteredTodos : todos
        let renderTodos =
            todosArr.length > 0 ? (
                todosArr.map((todo, i) => {
                    return (
                        <li
                            className={`todo-item ${todo.isCompleted ? "completed" : ""}`}
                            key={i}
                            onClick={() => {
                                handleUpdateTask(todo)
                            }}
                        >
                            <div className="todo-title-wrapper d-flex justify-content-between mb-50">
                                <div className="todo-title-area d-flex align-items-center">
                                    <div className="title-wrapper d-flex">
                                        <Checkbox
                                            color="primary"
                                            className="user-checkbox"
                                            icon={<Check className="vx-icon" size={12} />}
                                            label={""}
                                            checked={todo.isCompleted}
                                            size="sm"
                                            onClick={e => {
                                                e.stopPropagation()
                                                this.props.completeTask(todo)
                                            }}
                                            onChange={e => e.stopPropagation()}
                                        />
                                        <h5 className="todo-title mt-50 mx-50">{todo.task_customer.name}</h5>
                                        <h6 className="todo-title mt-50 mx-50">{todo.title}</h6>
                                    </div>
                                    {todo.type != null ? (
                                        <div className="chip-wrapper">
                                                <div className="chip mb-0" key={i}>
                                                    <div className="chip-body">
                                                        <span className="chip-text">
                                                          <span
                                                              className={`bullet bullet-${
                                                                  todo.type === "relance_caisse"
                                                                      ? "primary"
                                                                      : todo.type === "relance_client"
                                                                      ? "warning"
                                                                      : todo.type === "envoi_caisse"
                                                                      ? "success"
                                                                      : todo.type === "envoi_client"
                                                                      ? "danger"
                                                                      : todo.type === "appel_client"
                                                                      ? "info"
                                                                      : "primary"
                                                              } bullet-xs`}
                                                          />
                                                          <span className="text-capitalize ml-25">
                                                            {todo.type.replace("_", " ")}
                                                          </span>
                                                        </span>
                                                    </div>
                                                </div>
                                        </div>
                                    ) : null}
                                </div>
                                <div className={`todo-item-action d-flex ${
                                        routerFilter === "trashed" ? "justify-content-end" : ""
                                    }`}
                                >
                                    <div className="todo-item-favorite d-inline-block mr-1 mr-sm-0" style={{width:'110px'}}>
                                            <Button.Ripple color={todo.end_date != null? new Date() < new Date(todo.end_date)? "success": "danger" : "warning"} outline style={{width:'110px',padding:'6px'}}>
                                                {todo.end_date != null? dateConvert(todo.end_date):'No EndDate'}
                                            </Button.Ripple>
                                    </div>
                                    <div
                                        style={{marginLeft:'15px'}}
                                        className={`todo-item-info d-inline-block ${
                                            routerFilter === "trashed" ? "mr-1" : "mr-1 mr-sm-0"
                                        }`}
                                        onClick={e => {
                                            e.stopPropagation()
                                            this.props.importantTask(todo)
                                        }}
                                    >
                                        <Info
                                            size={17}
                                            className={`${todo.isImportant ? "text-success" : ""}`}
                                        />
                                    </div>
                                    <div
                                        style={{marginLeft:'8px'}}
                                        className="todo-item-favorite d-inline-block mr-1 mr-sm-0"
                                        onClick={e => {
                                            e.stopPropagation()
                                            this.props.readTask(todo)
                                        }}
                                    >
                                        <Star
                                            size={17}
                                            className={`${todo.isRead ? "text-warning" : ""}`}
                                        />
                                    </div>
                                    {routerFilter !== "trashed" ? (
                                        <div
                                            style={{marginLeft:'8px'}}
                                            className="todo-item-delete d-inline-block mr-1 mr-sm-0"
                                            onClick={e => {
                                                e.stopPropagation()
                                                this.setState({ delete_id : todo.id, Alert:true})
                                            }}
                                        >
                                            <Trash size={17} />
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                            {todo.desc.length > 0 ? (
                                <p className="todo-desc truncate mb-0">{todo.desc}</p>
                            ) : (
                                ""
                            )}
                        </li>
                    )
                })
            ) : (
                <p className="p-1 text-center mt-2 font-medium-3 text-bold-500">
                    No tasks at this time
                </p>
            )

        return (
            <div className="content-right">
                <SweetAlert warning title="Warning"
                            show={this.state.Alert}
                            onConfirm={() => {
                                this.setState({Alert:false});
                                this.props.trashTask(this.state.delete_id)
                            }}
                >
                    <p className="sweet-alert-text"> tes-vous certain? </p>
                </SweetAlert>
                <div className="todo-app-area">
                    <div className="todo-app-list-wrapper">
                        <div className="todo-app-list">
                            <div className="app-fixed-search">
                                <div
                                    className="sidebar-toggle d-inline-block d-lg-none"
                                    onClick={() => this.props.mainSidebar(true)}
                                >
                                    <Menu size={24} />
                                </div>
                                <FormGroup className="position-relative has-icon-left m-0 d-inline-block d-lg-block">
                                    <Input
                                        type="text"
                                        placeholder="Search..."
                                        onChange={e => this.handleOnChange(e)}
                                        value={value}
                                    />
                                    <div className="form-control-position">
                                        <Search size={15} />
                                    </div>
                                </FormGroup>
                            </div>
                            <PerfectScrollbar
                                className="todo-task-list"
                                options={{
                                    wheelPropagation: false
                                }}
                            >
                                <ul className="todo-task-list-wrapper">{renderTodos}</ul>
                            </PerfectScrollbar>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        app: state.todoApp
    }
}
export default connect(mapStateToProps, {
    getTodos,
    completeTask,
    readTask,
    importantTask,
    trashTask,
    searchTask
})(TaskList)

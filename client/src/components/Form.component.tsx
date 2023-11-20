import TextArea from "./TextArea";
import { Link, Form, FormMethod } from "react-router-dom";
import { SecondaryButton } from "./Button.secondary";
import Button from "./Button";
import Inputs from "./Inputs";
import { User } from "../interface/User.interface";
import { Post } from "../interface/Posts";
import Select from "./Select";
type ResponseType = { users: User[]; posts?: Post; method: FormMethod };
function FormElement({ users, posts, method }: ResponseType){
	return (
		<Form method={method}>
			<div className="flex flex-col">
				<div className="flex mb-2  justify-between">
					<Inputs
						className="p-2 grow"
						name="postTitle"
						type="text"
						label="Title"
						defaultValue={posts?.title}
					/>
					<Select
						label="Author"
						name="postAuthor"
						id="author"
                        postId={posts?.id}
						options={users}
					/>
				</div>
				<TextArea
					label="body"
					id="body"
					name="postBody"
                    defaultValue={posts?.body}
				/>
				<div className="flex my-5">
					<div className="ml-auto">
						<Link relative="path" to="..">
							<SecondaryButton className="mr-2" type="button">
								Cancel
							</SecondaryButton>
						</Link>
						<Button type="submit">Save</Button>
					</div>
				</div>
			</div>
		</Form>
	);
}

export default FormElement;
